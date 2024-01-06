import { Data } from "../models";

export const getData = async (req, res) => {
  try {
    const data = Data.find();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al obtener los datos" });
  }
};
