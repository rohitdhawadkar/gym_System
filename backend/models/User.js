import mongoose from "mongoose";

// Define User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String },
  trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer' },  // FK to Trainer
  workoutPlan: { type: mongoose.Schema.Types.ObjectId, ref: 'WorkoutPlan' },  // FK to WorkoutPlan
  diet: { type: mongoose.Schema.Types.ObjectId, ref: 'Diet' }  // FK to Diet
});

// Create and Export the User Model
const User = mongoose.model('User', userSchema);

export default User;
