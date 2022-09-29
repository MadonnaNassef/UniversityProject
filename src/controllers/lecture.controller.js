import { Router } from "express";
import * as   lectureService from "../services/lectures/index.js";
const router = Router();

router.get("/", lectureService.getLectures);
router.get("/:id", lectureService.getLecturerId);


export default router;