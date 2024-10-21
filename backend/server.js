import express from "express";
import ConnectDB from "./config/dbconfig.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import trainerRoutes from "./routes/trainerRoutes.js";
import workoutPlanRoutes from "./routes/workoutPlanRoutes.js";
import dietRoutes from "./routes/dietRoutes.js";
import signup from "./routes/singupRoute.js";
import login from "./routes/loginRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
ConnectDB();
app.use("/api/users", userRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/workoutplans", workoutPlanRoutes);
app.use("/api/diets", dietRoutes);
app.use("/api/singup", signup);
app.use("/api/login", login);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
