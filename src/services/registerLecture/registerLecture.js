import Lecture from '../../helpers/db/lecture.db.js';
import User from '../../helpers/db/users.db.js';
import registeredLectures from '../../helpers/db/registeredLectures.db.js';
import {
	badRequestResponse,
	notFoundResponse,
	okResponse,
} from '../../helpers/functions/ResponseHandler.js';
export async function registerLecture(req, res, next) {
	try {
		const { lectureId, userId } = req.body;
		const lecture = Lecture.find((lecture) => lecture.id == lectureId);
		if (!lecture) {
			return notFoundResponse(res, 'Lecture not found');
		}
		const user = User.find((user) => user.id == userId);
		if (!user) {
			return notFoundResponse(res, 'User not found');
		}
		if (user.role !== 'student') {
			return badRequestResponse(
				res,
				'Only students can register to lectures',
			);
		}
		if (
			registeredLectures.some(
				(lecReg) =>
					lecReg.userId == userId && lecReg.lectureId == lectureId,
			)
		) {
			return badRequestResponse(
				res,
				'User already registered to this lecture',
			);
		}
		const registeredLecture = {
			lectureId,
			userId,
		};
		registeredLectures.push(registeredLecture);
		return okResponse(
			res,
			'Lecture registered successfully',
			registeredLecture,
		);
	} catch (err) {
		next(err);
	}
}
