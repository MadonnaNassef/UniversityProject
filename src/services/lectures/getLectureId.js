import lectures from "../../helpers/db/lecture.db.js";
import { badRequestResponse } from "../../helpers/functions/ResponseHandler.js";
import { okResponse } from "./../../helpers/functions/ResponseHandler.js";
export function getLecturerId(req, res, next) {
  try {
    const { id } = req.params;
    const lectureIndex = lectures.findIndex((lecture) => lecture.id === parseInt(id));
    if (lectureIndex === -1) {
      return badRequestResponse(res, "user not found");
    }
    return okResponse(res, "User fetched succesfully", lectures[lectureIndex]);
  } catch (err) {
    next(err);
  }
}
