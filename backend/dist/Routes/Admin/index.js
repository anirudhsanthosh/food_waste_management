"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
var Admin_exports = {};
__export(Admin_exports, {
  AdminRouter: () => AdminRouter
});
module.exports = __toCommonJS(Admin_exports);
var import_express = require("express");
var import_getPickups = require("../../Controller/Admin/getPickups");
var import_updatePickup = require("../../Controller/Admin/updatePickup");
var import_adminAuth = require("../../Middlewares/adminAuth");
var import_jwtAuth = require("../../Middlewares/jwtAuth");
var import_validateRequestPayload = require("../../Middlewares/validateRequestPayload");
var import_Admin = require("../../Schemas/Admin");
const AdminRouter = (0, import_express.Router)();
AdminRouter.get("/pickups", import_jwtAuth.authenticateWithJwt, import_adminAuth.authenticateAdmin, import_getPickups.getPickupRequests);
AdminRouter.patch("/pickups/:pickupId", import_jwtAuth.authenticateWithJwt, import_adminAuth.authenticateAdmin, (0, import_validateRequestPayload.validateRequestPayload)(import_Admin.updateFoodRequestSchema), import_updatePickup.updatePickupRequest);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AdminRouter
});
