import { okResponse } from '../../helpers/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
export async function getLectures(req, res, next) {
	try {
		const lectures = await prisma.lecture.findMany({
			include: {
				teacher: {
					select: {
						id: true,
						name: true,
					},
				},
			},
		});
		return okResponse(res, 'All lectures are fetched', lectures);
	} catch (err) {
		next(err);
	}
}
