import { Router } from "express";

const router = Router();

router.get("/data", bringData);
router.post("/data", saveData);
router.delete("/data", deleteData);
