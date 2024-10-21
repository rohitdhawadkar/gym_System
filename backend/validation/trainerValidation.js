import { z } from 'zod';

export const trainerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  specialization: z.string().min(1, 'Specialization is required'),
  experience: z.number().nonnegative('Experience must be a non-negative number'),
  contact: z.string().optional(), // You can add a regex for phone number format if needed
});

export default trainerSchema;