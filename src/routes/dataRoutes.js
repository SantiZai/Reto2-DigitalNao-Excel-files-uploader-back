import { Router } from "express";
import { getData, saveData } from "../controllers/dataControllers.js";

const router = Router();

router.get("/", getData);
router.post("/", saveData);
//router.delete("/", deleteData);

export default router;
