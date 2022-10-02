import { okResponse } from './../../helpers/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
export async function getUsers(req, res, next) {
	try {
		const users = await prisma.user.findMany({
			where: {
				role: 'Student',
			},
		});
		return okResponse(
			res,
			'List of users which are students fetched succesfully',
			users,
		);
	} catch (err) {
		next(err);
	}
}
