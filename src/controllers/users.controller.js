import { Router } from 'express';
import * as UsersService from '../services/users/index.js';
import { getRegisteration } from '../services/registerLecture/getRegisteration.js';
const router = Router();

router.get('/', UsersService.getUsers);
router.get('/:id', UsersService.getUserId);
router.get('/:id/lectures', getRegisteration);
export default router;
