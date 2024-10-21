import { z } from 'zod';

// Middleware function to validate request body with Zod schema
export const zodValidate = (schema) => (req, res, next) => {
  try {
    // Parse the request body using the provided Zod schema
    schema.parse(req.body);
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    // If validation fails, return a 400 response with error details
    const errors = error.errors.map((err) => ({
      path: err.path.join('.'), // Path of the invalid field
      message: err.message, // Validation message
    }));

    res.status(400).json({ errors });
  }
};
