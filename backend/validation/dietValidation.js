import { z } from 'zod';

export const dietSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  meals: z.array(z.string()).nonempty('At least one meal is required'),
});
