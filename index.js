import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

// use the .env file
config();

// create the express server
const app = express();

// parse the content of the requests
app.use(express.json())

// use the morgan middleware
app.use(morgan("dev"));

// connection to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

const exampleSchema = new Schema({
  name: String,
});

const Example = model("ExampleData", exampleSchema);

const firstExample = new Example({
  name: "Santi",
});

await firstExample.save();

app.get("/example", async (req, res) => {
  res.send(await Example.find());
});

// example http
app.post("/example", (req, res) => {
  const newExample = new Example(req.body);
  newExample
    .save()
    .then((example) => res.json(example))
    .catch((err) => console.error(err));
});

app.get("/", (req, res) => res.send("Hello world"));

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
