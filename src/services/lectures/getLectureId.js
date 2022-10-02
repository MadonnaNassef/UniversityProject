import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
import { okResponse } from './../../helpers/functions/ResponseHandler.js';
export async function getLecturerId(req, res, next) {
	try {
		const { id } = req.params;
		const lectureById = await prisma.lecture.findUnique({
			where: {
				id: parseInt(id),
			},
			include: {
				teacher: {
					select: {
						id: true,
						name: true,
					},
				},
			},
		});
		if (!lectureById) {
			return badRequestResponse(res, 'Lecture not found');
		}
		return okResponse(res, 'User fetched succesfully', lectureById);
	} catch (err) {
		next(err);
	}
}
