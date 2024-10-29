import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String },
  trainer: { type: mongoose.Schema.Types.ObjectId, ref: "Trainer" },
  workoutPlan: { type: mongoose.Schema.Types.ObjectId, ref: "WorkoutPlan" },
  diet: { type: mongoose.Schema.Types.ObjectId, ref: "Diet" },
});

const User = mongoose.model("User", userSchema);

export default User;
