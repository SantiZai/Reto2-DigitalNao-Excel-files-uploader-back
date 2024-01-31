import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
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
    const newUser = { username, password: hashedPasword };
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
    // verify if the user exists in the database
    !existingUser ?? res.status(404).json({ message: "User not found" });
    // if the user exists, can compare the password in the request with the password of the user finded
    compare(password, existingUser.password)
      .then((isValidPassword) => {
        // if the password is valid, generate a jwt for the client
        if (isValidPassword) {
          const token = jwt.sign({ id: existingUser._id }, "secretkey", {
            expiresIn: 86400,
          });
          res.status(200).json({ auth: true, token });
        } else res.status(404).json({ message: "The password are invalid" });
      })
      .catch((err) => console.error(err));
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message:
        "Ha ocurrido un error al tratar de recuperar los datos de la cuenta",
    });
  }
};
