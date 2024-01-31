import { Router } from "express";
import { getUsers, login, saveUser } from "../controllers/userControllers.js";

const router = Router();

router.get("/", getUsers);
router.post("/", saveUser);
router.post("/login", login);

export default router;
