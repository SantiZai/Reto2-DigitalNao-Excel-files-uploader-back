import { Router } from "express";
import {
  getData,
  saveData,
  deleteData,
} from "../controllers/dataControllers.js";
import { verifyToken } from "../utils/middlewares.js";

const router = Router();

router.get("/", verifyToken, getData);
router.post("/", verifyToken, saveData);
router.delete("/", verifyToken, deleteData);

export default router;
