import { config } from "dotenv";
import connectDb from "./db.js";
import app from "./app.js"

// use the .env file
config();

// connect to database
connectDb();

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
