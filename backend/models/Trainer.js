import mongoose from "moongoose"


const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number },  // In years
  contact: { type: String }
});
const Trainer = mongoose.model('Trainer', trainerSchema);

export default Trainer;