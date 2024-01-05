import express from "express";
import cors from "cors";
import morgan from "morgan";

// create the express server
const app = express();

// parse the content of the requests
app.use(express.json());

// use the morgan & cors middlewares
app.use(morgan("dev"));
app.use(cors());

export default app