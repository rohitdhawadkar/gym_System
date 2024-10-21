import express from "express";
import {
  deleteDiet,
  getDiets,
  updateDiet,
  createDiet,
  getDietById,
} from "../controllers/dietController.js";
import { zodValidate } from "../middlewares/zodMiddleware.js";
import dietSchema from "../validation/dietValidation.js";
const router = express.Router();

router.get("/", getDiets);
router.get("/:id", getDietById);
router.post("/", zodValidate(dietSchema), createDiet);
router.put("/:id", updateDiet);
router.delete("/:id", deleteDiet);

export default router;
