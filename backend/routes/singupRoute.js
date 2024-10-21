import express from 'express';
import { signup } from '../controllers/authController.js';
import zodValidate from '../middlewares/zodMiddleware.js';
import { signupSchema } from '../validation/authValidation.js';

const router = express.Router();

// POST /api/auth/signup - User Signup Route
router.post('/signup', zodValidate(signupSchema), signup);


export default router;
