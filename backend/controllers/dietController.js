import Diet from "../models/Diet.js";

export const getDiets = async (req, res) => {
  try {
    const diets = await Diet.find();
    res.json(diets);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

export const getDietById = async (req, res) => {
  try {
    const diet = await Diet.findById(req.params.id);
    if (!diet) return res.status(404).json({ msg: "Diet not found" });
    res.json(diet);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

export const createDiet = async (req, res) => {
  const { title, description, meals } = req.body;
  try {
    const newDiet = new Diet({ title, description, meals });
    await newDiet.save();
    res.json(newDiet);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

export const updateDiet = async (req, res) => {
  try {
    const diet = await Diet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!diet) return res.status(404).json({ msg: "Diet not found" });
    res.json(diet);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

export const deleteDiet = async (req, res) => {
  try {
    const diet = await Diet.findByIdAndDelete(req.params.id);
    if (!diet) return res.status(404).json({ msg: "Diet not found" });
    res.json({ msg: "Diet deleted" });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

export { deleteDiet, getDiets, updateDiet, createDiet, getDietById };
