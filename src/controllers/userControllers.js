import { User } from "../models.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al obtener los datos" });
  }
};

export const saveUser = async (req, res) => {
  try {
    const newUser = req.body;
    await User.insertMany(newUser);
    res.json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al guardar los datos" });
  }
};
