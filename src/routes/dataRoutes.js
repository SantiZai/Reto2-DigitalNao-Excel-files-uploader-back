import { Router } from "express";

const router = Router();

router.get("/data", getData);
router.post("/data", saveData);
router.delete("/data", deleteData);
