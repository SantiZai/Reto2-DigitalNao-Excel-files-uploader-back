import express from "express";
import cors from "cors";
import morgan from "morgan";
import dataRoutes from "./routes/dataRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// create the express server
const app = express();

// parse the content of the requests
app.use(express.json());

// use the morgan & cors middlewares
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/data", dataRoutes);
app.use("/users", userRoutes);

export default app;
