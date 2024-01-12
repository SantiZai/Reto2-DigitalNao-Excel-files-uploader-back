import { hash, compare } from "bcrypt";
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
    const { username, password } = req.body;
    const hashedPasword = await hash(password, 10);
    const newUser = { username, hashedPasword };
    await User.insertMany(newUser);
    res.json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al guardar los datos" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    !existingUser && res.status(404).json({ message: "User not found" })
    const isValidPassword = compare(password, existingUser.password);
    // TODO: add jwt to return to the front
    isValidPassword
      ? res.status(200).json({ message: "Logged in" })
      : res.status(404).json({ message: "The password are invalid" });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message:
        "Ha ocurrido un error al tratar de recuperar los datos de la cuenta",
    });
  }
};
