import lecture from "../../helpers/db/lecture.db.js";
import { okResponse } from "../../helpers/functions/ResponseHandler.js";
export function getLectures(req, res, next) {
  try {
    return okResponse(res, "All lectures are fetched", lecture);
  } catch (err) {
    next(err);
  }
}