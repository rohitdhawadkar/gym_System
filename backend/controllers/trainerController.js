import Trainer from '../models/Trainer.js';

// CRUD Operations for Trainer
export const getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

export const getTrainerById = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);
    if (!trainer) return res.status(404).json({ msg: 'Trainer not found' });
    res.json(trainer);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

export const createTrainer = async (req, res) => {
  const { name, specialization, experience, contact } = req.body;
  try {
    const newTrainer = new Trainer({ name, specialization, experience, contact });
    await newTrainer.save();
    res.json(newTrainer);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

export const updateTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!trainer) return res.status(404).json({ msg: 'Trainer not found' });
    res.json(trainer);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

export const deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndDelete(req.params.id);
    if (!trainer) return res.status(404).json({ msg: 'Trainer not found' });
    res.json({ msg: 'Trainer deleted' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
