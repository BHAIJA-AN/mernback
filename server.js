require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const connectDB = require("./utils/db");
const contact_router= require("./router/contact-router");
const errorMiddleware = require("./middlewares/error-middleware");
const FETCH = process.env.ALLOW_REQUEST;
const app = express();

// Split the FETCH variable into an array of origins if it contains multiple URLs
const allowedOrigins = FETCH.split(',');

// CORS configuration using the FETCH variable
const corsOption = {
  origin: function (origin, callback) {
    // If origin is in the allowedOrigins array or it's undefined (e.g., for non-browser requests), allow it
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET, PUT, POST, DELETE, PATCH, HEAD", // Allowed HTTP methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Apply the CORS middleware with the specified options
app.use(cors(corsOption));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my API!'); // This will handle GET requests to http://localhost:5000/
});

// Routes
app.use("/api", contact_router);
app.use(errorMiddleware);

 

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
}).catch((error) => {
  console.error("Failed to connect to MongoDB:", error);
});
