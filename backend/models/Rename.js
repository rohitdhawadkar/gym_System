import mongoose from "mongoose";

const workoutPlanSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    exercises: [{ name: String, reps: Number, sets: Number }],  // List of exercises
    durationWeeks: { type: Number, required: true }
  });
  

const Workout = mongoose.model('Workout', workoutplanSchema);

export default Workout;