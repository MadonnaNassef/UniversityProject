import Lecture from '../../helpers/db/lecture.db.js';
import User from '../../helpers/db/users.db.js';
import registeredLectures from '../../helpers/db/registeredLectures.db.js';
import {
	okResponse,
	notFoundResponse,
	badRequestResponse,
} from '../../helpers/functions/ResponseHandler.js';
export function getRegisteration(req, res, next) {
	try {
		const { userId } = req.params;
		const user = User.find((user) => user.id == userId);
		if (!user) {
			return notFoundResponse(res, 'User not found');
		}
		if (user.role !== 'student') {
			return badRequestResponse(
				res,
				'Only students can access their lectures',
			);
		}
		const userLectures = registeredLectures.filter(
			(regLec) => regLec.userId == userId,
		);
		const lectures = userLectures.map((regLec) => {
			const lecture = Lecture.find((lec) => lec.id == regLec.lectureId);
			return lecture;
		});
		return okResponse(res, 'Lectures retrieved successfully', lectures);
	} catch (err) {
		next(err);
	}
}
