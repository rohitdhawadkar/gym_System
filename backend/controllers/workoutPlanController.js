import WorkoutPlan from '../models/WorkoutPlan.js';

// CRUD Operations for WorkoutPlan
export const getWorkoutPlans = async (req, res) => {
  try {
    const workoutPlans = await WorkoutPlan.find();
    res.json(workoutPlans);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

export const getWorkoutPlanById = async (req, res) => {
  try {
    const workoutPlan = await WorkoutPlan.findById(req.params.id);
    if (!workoutPlan) return res.status(404).json({ msg: 'Workout Plan not found' });
    res.json(workoutPlan);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

export const createWorkoutPlan = async (req, res) => {
  const { title, description, exercises, durationWeeks } = req.body;
  try {
    const newWorkoutPlan = new WorkoutPlan({ title, description, exercises, durationWeeks });
    await newWorkoutPlan.save();
    res.json(newWorkoutPlan);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

export const updateWorkoutPlan = async (req, res) => {
  try {
    const workoutPlan = await WorkoutPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!workoutPlan) return res.status(404).json({ msg: 'Workout Plan not found' });
    res.json(workoutPlan);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

export const deleteWorkoutPlan = async (req, res) => {
  try {
    const workoutPlan = await WorkoutPlan.findByIdAndDelete(req.params.id);
    if (!workoutPlan) return res.status(404).json({ msg: 'Workout Plan not found' });
    res.json({ msg: 'Workout Plan deleted' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
