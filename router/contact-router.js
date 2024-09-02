// router/contact-router.js

const express = require("express");
const router = express.Router();
const { contact, home } = require("../controllers/contact-controllers.js"); // Correct the path
const { ContactSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware.js");

router.route('/home').get(home); // Check if home is defined
router.route('/contact').post(validate(ContactSchema), contact); // Check if contactform is defined

module.exports = router;
