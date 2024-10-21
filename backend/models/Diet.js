
import mongoose from "mongoose";
const dietSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    meals: [{
      name: String,
      time: String,
      calories: Number,
      protein: Number,
      fat: Number,
      carbs: Number
    }]
  });
  

  const Diet = mongoose.model('Diet', dietSchema);
  export default Diet