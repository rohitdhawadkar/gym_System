import { z } from 'zod';

export const workoutPlanSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  exercises: z.array(z.string()).nonempty('At least one exercise is required'),
  durationWeeks: z.number().positive('Duration must be a positive number'),
});

export default workoutPlanSchema;