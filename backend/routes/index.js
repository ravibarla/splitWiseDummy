import express from "express";
import { createGroup, getGroups } from "../controller/index.js";

const router = express.Router();
router.get("/", getGroups);
router.post("/create", createGroup);
export default router;
