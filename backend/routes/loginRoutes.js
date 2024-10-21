import express from 'express';
import { login } from '../controllers/authController.js';
import { loginSchema } from '../validation/authValidation.js';
import zodValidate from '../middlewares/zodMiddleware.js';

const router = express.Router();


// POST /api/auth/login - User Login Route
router.post('/login',zodValidate(loginSchema) , login);

export default router;
