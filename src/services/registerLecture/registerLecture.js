import {
	badRequestResponse,
	conflictResponse,
	notFoundResponse,
	okResponse,
} from '../../helpers/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
export async function registerLecture(req, res, next) {
	try {
		const { lectureId, userId } = req.body;
		const lecture = await prisma.lecture.findUnique({
			where: {
				id: parseInt(lectureId),
			},
		});
		if (!lecture) {
			return notFoundResponse(res, 'Lecture not found');
		}
		const user = await prisma.user.findUnique({
			where: {
				id: parseInt(userId),
			},
		});
		if (!user) {
			return notFoundResponse(res, 'User not found');
		}
		if (user.role !== 'student') {
			return badRequestResponse(
				res,
				'Only students can register to lectures',
			);
		}
		const registeredLecture = await prisma.registeredLectures.findFirst({
			where: {
				lectureId: parseInt(lectureId),
				userId: parseInt(userId),
			},
		});
		if (registeredLecture) {
			return conflictResponse(
				res,
				'You have already registered to this lecture',
			);
		}
		// const registeredLecture = {
		// 	lectureId,
		// 	userId,
		// };
		// registeredLectures.push(registeredLecture);
		return okResponse(
			res,
			'Lecture registered successfully',
			// registeredLecture,
		);
	} catch (err) {
		next(err);
	}
}
