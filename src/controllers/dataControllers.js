import { Data } from "../models.js";

const getBatchedData = (data, page) => {
  if (page === "1") return data.slice(0, 10);
  else return data.slice(Number(page) * 10 - 10, Number(page) * 10);
};

export const getData = async (req, res) => {
  const { page } = req.query;
  try {
    const data = await Data.find();
    const results = data.map((doc) => doc.toObject());
    const batch = getBatchedData(results, page);
    res.status(200).json({ batchedData: batch, dataLength: data.length });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al obtener los datos" });
  }
};

export const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Data.findById(id);
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al obtener los datos" });
  }
};

export const saveData = async (req, res) => {
  try {
    const excelData = Object.values(req.body);
    const mappedData = excelData.map((row) => {
      return {
        branch: row["Branch  F553007.MMCU"],
        businessUnit: row["Business Unit F553007.MCU"],
        dailyCapacity: row["Daily Capacity (RF-GA)"],
        effectiveFrom: row["Effective From F553007.EFFF"],
        firmWO: row["FirmWO"],
        itemNumber: row["2nd Item Number - LITM"],
        monthDescription: row["Month Description Effective From EFFF"],
        monthlyCapacity: row["Mothly Capacty (RF- GA)"],
        plannedReleased: row["Planned / Released (RF-GA)"],
        plannedWO: row["PlannedWO"],
        primaryUOMHour: row["Primary UOM/Hour"],
        quantityOrderer: row["Quantity Ordered "],
        rateHour: row["Rate/Hour (RF-GA)"],
        requestDate: row["Request Date F553312.DRQJ"],
        shortItem: row["Short Item No F553312.ITM"],
        typeOfRouting: row["Type of Routing"],
        wOStartDate: row["WO Start Date"],
        wOStatus: row["WO Status"],
        weekNumberEffective: row["Week Number Effective From EFFF"],
        weeklyCapacity: row["Weekly Capacity  (RF-GA)"],
        workOrderNo: row["Work Order No"],
        workOrderQuantity: row["Work Order Quantity"],
      };
    });
    await Data.insertMany(mappedData);
    res.json({ message: "data imported successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al guardar los datos" });
  }
};

export const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(id, data);
    const result = await Data.findByIdAndUpdate(id, data, { new: true });
    if (result)
      res
        .status(200)
        .json({ data: result, message: "Entrada actualizada correctamente" });
    else res.status(404).json({ message: "Entrada no encontrada" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al actualizar los datos" });
  }
};

export const deleteData = async (req, res) => {
  try {
    await Data.deleteMany({});
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al eliminar los datos" });
  }
};
