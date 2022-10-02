import { Router } from 'express';
import joiMiddleware from '../helpers/middlewares/joiMiddleware.js';
import * as UsersService from '../services/users/index.js';
import registerSchema from '../helpers/schemas/register.schema.js';
import { getRegisteration } from '../services/registerLecture/getRegisteration.js';
const router = Router();

router.get('/', UsersService.getUsers);
router.get('/:id', UsersService.getUserId);
router.post('/', joiMiddleware(registerSchema), UsersService.addUser);
router.get('/:id/lectures', getRegisteration);
export default router;
