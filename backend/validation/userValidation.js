import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  age: z.number().positive('Age must be a positive number'),
  gender: z.enum(['Male', 'Female', 'Other']).optional(),
});

export default userSchema;