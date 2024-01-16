import { Router } from "express";
import {
  getData,
  getById,
  saveData,
  updateData,
  deleteData,
} from "../controllers/dataControllers.js";
import { verifyToken } from "../utils/middlewares.js";

const router = Router();

router.get("/", verifyToken, getData);
router.get("/:id", verifyToken, getById);
router.post("/", verifyToken, saveData);
router.patch("/:id", verifyToken, updateData);
router.delete("/", verifyToken, deleteData);

export default router;
