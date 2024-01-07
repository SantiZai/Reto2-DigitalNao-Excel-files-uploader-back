import { Schema, model } from "mongoose";

const dataSchema = new Schema(
  {
    "2nd Item Number - LITM": String,
    "Branch  F553007.MMCU": String,
    "Business Unit F553007.MCU": String,
    "Daily Capacity (RF-GA)": String,
    "Effective From F553007.EFFF": String,
    FirmWO: String,
    "Month Description Effective From EFFF": String,
    "Mothly Capacty (RF- GA)": String,
    "Planned / Released (RF-GA)": String,
    PlannedWO: String,
    "Primary UOM/Hour": String,
    "Quantity Ordered ": String,
    "Rate/Hour (RF-GA)": String,
    "Request Date F553312.DRQJ": String,
    "Short Item No F553312.ITM": String,
    "Type of Routing": String,
    "WO Start Date": String,
    "WO Status": String,
    "Week Number Effective From EFFF": String,
    "Weekly Capacity (RF-GA)": String,
    "Work Order No": String,
    "Work Order Quantity": String,
  },
  { strict: false }
);

export const Data = model("Data", dataSchema);
