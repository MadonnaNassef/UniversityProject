import Users from "../../helpers/db/users.db.js";
import { badRequestResponse } from "../../helpers/functions/ResponseHandler.js";
import { okResponse } from "./../../helpers/functions/ResponseHandler.js";
export function getUserId(req, res, next) {
  try {
    const { id } = req.params;
    const userIndex = Users.findIndex((user) => user.id === parseInt(id));
    if (userIndex === -1) {
      return badRequestResponse(res, "user not found");
    }
    return okResponse(res, "User fetched succesfully", Users[userIndex]);
  } catch (err) {
    next(err);
  }
}
