import {
	okResponse,
	notFoundResponse,
	badRequestResponse,
} from '../../helpers/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
export async function getRegisteration(req, res, next) {
	try {
		const { userId } = req.params;
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
				'Only students can access their lectures',
			);
		}
		const registeredLectures = await prisma.registeredLectures.findMany({
			where: {
				userId: parseInt(userId),
			},
			include: {
				lecture: {
					include: {
						teacher: {
							select: {
								id: true,
								name: true,
							},
						},
					},
				},
			},
		});

		return okResponse(
			res,
			'Lectures retrieved successfully',
			registeredLectures,
		);
	} catch (err) {
		next(err);
	}
}
