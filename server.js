require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const contact_router= require("./router/contact-router");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();

const corsOption = {
  origin: "http://localhost:5174",
  methods: "GET, PUT, POST, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my API!'); // This will handle GET requests to http://localhost:5000/
});

// Routes
app.use("/api", contact_router);
app.use(errorMiddleware);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
}).catch((error) => {
  console.error("Failed to connect to MongoDB:", error);
});
