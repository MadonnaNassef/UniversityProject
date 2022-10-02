import express from 'express';
import UserRouter from './controllers/users.controller.js';
import lectureRouter from './controllers/lecture.controller.js';
import lectureRegisteration from './controllers/letureRegisteration.contoller.js';
import AuthRouter from './controllers/auth.controller.js';
import logger from './helpers/middlewares/logger.js';
import dotenv from 'dotenv';
import errorHandler from './helpers/middlewares/errorHandler.js';
dotenv.config();
const app = express();

// -- Middleware --
app.use(express.json());
app.use(logger);

// -- Routes --
app.use('/users', UserRouter);
app.use('/lectures', lectureRouter);
app.use('/registerlectures', lectureRegisteration);
app.use('/auth', AuthRouter);
app.use(errorHandler);
const PORT = 3000;
app.listen(PORT, () => {
	console.log('Server is running on port 3000');
	console.log(`http://localhost:${PORT}`);
});

export default app;
