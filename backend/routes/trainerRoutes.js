import express from 'express';
import { getTrainers, getTrainerById, createTrainer, updateTrainer, deleteTrainer } from '../controllers/trainerController.js';

const router = express.Router();

router.get('/', getTrainers);
router.get('/:id', getTrainerById);
router.post('/', createTrainer);
router.put('/:id', updateTrainer);
router.delete('/:id', deleteTrainer);

export default router;
