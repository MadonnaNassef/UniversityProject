import Users from "../../helpers/db/users.db.js";
import { badRequestResponse } from "../../helpers/functions/ResponseHandler.js";
import { okResponse } from "./../../helpers/functions/ResponseHandler.js";
export function addUser(req, res, next) {
  try {
    const { name, email, password, phoneNumber,role } = req.body;
    if (Users.some((user) => user.email === email)) {
      return badRequestResponse(res, "Email already exists");
    }
    if (role!="student" && role!="teacher")
    {
      return badRequestResponse(res, "Role must be Student or Teacher");
    }
    const user = {
      id: Users.length + 1,
      name,
      phoneNumber,
      password,
      email,
      role,
    };
    Users.push(user);
    return okResponse(res, "User registered succesfully", user);
  } catch (err) {
    next(err);
  }
}
