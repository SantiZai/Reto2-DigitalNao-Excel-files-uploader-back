import { Router } from "express";
import { getUsers, saveUser } from "../controllers/userControllers.js";

const router = Router();

router.get("/", getUsers);
router.post("/", saveUser);
/* router.delete("/:id"); */

export default router;
