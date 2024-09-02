const { Schema, model } = require('mongoose');  // Destructure Schema and model from mongoose

const ContactSchema = new Schema({  // Use Schema from destructured mongoose
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const Contact = model('Contact', ContactSchema);  // Capitalize 'Contact' to match naming convention

module.exports = Contact;
