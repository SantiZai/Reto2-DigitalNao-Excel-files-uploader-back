import { config } from "dotenv";
import { Schema, model } from "mongoose";
import { connectDb } from "./db.js";
import app from "./app.js";

// use the .env file
config();

connectDb();

const exampleSchema = new Schema({
  name: String,
});

const Example = model("ExampleData", exampleSchema);

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
