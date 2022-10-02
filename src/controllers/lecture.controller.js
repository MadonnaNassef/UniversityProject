import { Router } from 'express';
import * as lectureService from '../services/lectures/index.js';
import { registerLecture } from '../services/registerLecture/registerLecture.js';
const router = Router();

router.get('/', lectureService.getLectures);
router.get('/:id', lectureService.getLecturerId);
router.post('/', registerLecture);

export default router;
