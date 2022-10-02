import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
import { okResponse } from './../../helpers/functions/ResponseHandler.js';
export async function getUserId(req, res, next) {
	try {
		const { id } = req.params;
		const user = await prisma.user.findUnique({
			where: {
				id: parseInt(id),
			},
		});
		if (!user) {
			return badRequestResponse(res, 'User not found');
		}
		return okResponse(res, 'User fetched succesfully', user);
	} catch (err) {
		next(err);
	}
}
