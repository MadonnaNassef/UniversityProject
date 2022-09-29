import { Router } from "express";
import * as   registerationService from "../services/registerLecture/getRegisteration.js"
const router = Router();


router.get("/", registerationService.getRegisteration)

export default router;