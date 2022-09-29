import lecture from "../../helpers/db/lecture.db.js";
import user from "../../helpers/db/users.db.js"
import { okResponse } from "../../helpers/functions/ResponseHandler.js";
export function getRegisteration(req, res, next) {
    if(user.role=="student")
 try {
    return okResponse(res, "Registeration succesful", lecture);
  } catch (err) {
    next(err);
  }
}