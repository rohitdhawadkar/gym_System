import express from 'express';
import { getWorkoutPlans, getWorkoutPlanById, createWorkoutPlan, updateWorkoutPlan, deleteWorkoutPlan } from '../controllers/workoutPlanController.js';
import zodValidate from '../middlewares/zodMiddleware.js';
import workoutPlanSchema from '../validation/workoutPlanValidation.js';
const router = express.Router();

router.get('/', getWorkoutPlans);
router.get('/:id', getWorkoutPlanById);
router.post('/',  zodValidate(workoutPlanSchema),createWorkoutPlan);
router.put('/:id', updateWorkoutPlan);
router.delete('/:id', deleteWorkoutPlan);

export default router;
