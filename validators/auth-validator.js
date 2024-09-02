const { z } = require("zod");

// Creating an object schema using Zod for validation with custom word count validation
const ContactSchema = z.object({
  email: z.string().email('Invalid email address'),
  message: z.string().refine(
    (msg) => msg.split(/\s+/).filter(Boolean).length >= 1,
    'Message must be at least 1 words long'
  ),
});

module.exports = { ContactSchema };
