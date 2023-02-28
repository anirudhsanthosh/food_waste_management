"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var login_controller_exports = {};
__export(login_controller_exports, {
  login: () => login
});
module.exports = __toCommonJS(login_controller_exports);
var import_Exceptions = require("../../Exceptions");
var import_User = require("../../Repositories/User");
var import_jwt = require("../../Services/jwt");
async function login(request, response, next) {
  const { email, password } = request.body;
  try {
    const existingUser = await (0, import_User.getUserByEmail)(email);
    if (existingUser === null)
      throw import_Exceptions.Exceptions.invalidRequest(`Invalid Email / Password, please try again.`);
    const { name: name2, uuid } = existingUser;
    const authToken = import_jwt.Jwt.create({ email, name: name2, uuid });
    const loginResponse = { authToken };
    const options = {
      maxAge: 1e3 * 60 * 60 * 48,
      // would expire after 2 days
      httpOnly: true,
      // The cookie only accessible by the web server
      // signed: true, // Indicates if the cookie should be signed
      path: "/",
      secure: true,
      sameSite: "none"
    };
    response.cookie("access_token", authToken, options);
    return response.json(loginResponse);
  } catch (error) {
    return next(error);
  }
  response.json({ email, name, password });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  login
});
