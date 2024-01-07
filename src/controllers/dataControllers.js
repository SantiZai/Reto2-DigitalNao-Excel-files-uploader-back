import { Data } from "../models.js";

export const getData = async (req, res) => {
  try {
    const data = await Data.find();
    const results = data.map((doc) => doc.toObject());
    console.log(JSON.stringify(results));
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al obtener los datos" });
  }
};

/* TODO: add the code to map the data to another file */
export const saveData = async (req, res) => {
  try {
    const excelData = req.body;
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
    console.log(mappedData);
    res.json({ message: "data imported successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al guardar los datos" });
  }
};
