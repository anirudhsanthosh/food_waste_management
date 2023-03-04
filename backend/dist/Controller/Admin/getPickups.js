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
var getPickups_exports = {};
__export(getPickups_exports, {
  getPickupRequests: () => getPickupRequests
});
module.exports = __toCommonJS(getPickups_exports);
var import_Exceptions = require("../../Exceptions");
var import_PickupRequest = require("../../Repositories/PickupRequest");
async function getPickupRequests(request, response, next) {
  try {
    const { limit = 500, offset = 0, status } = request.query;
    const pickups = await (0, import_PickupRequest.getAllPickups)({ limit: Number(limit), offset: Number(offset), status });
    response.send(pickups);
    return;
    const newRequest = request;
    const { user } = newRequest;
    const { pickupId } = request.params;
    const singlePickup = await isPickupRequestIdValid(pickupId, user);
    const pickup = !pickupId ? await (0, import_PickupRequest.getRequestsByUserId)(user.id) : singlePickup;
    response.json(pickup);
  } catch (err) {
    next(err);
  }
}
async function isPickupRequestIdValid(pickupId, user) {
  if (!pickupId)
    return true;
  if (!Number(pickupId))
    throw import_Exceptions.Exceptions.invalidRequest("Pickup request Id must be number");
  const pickup = await (0, import_PickupRequest.getRequestById)(Number(pickupId));
  if (!pickup || pickup.user_id !== user.id)
    throw import_Exceptions.Exceptions.invalidRequest("Invalid Pickup id");
  return pickup;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getPickupRequests
});
