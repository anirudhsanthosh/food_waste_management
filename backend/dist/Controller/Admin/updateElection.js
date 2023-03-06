"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var updateElection_exports = {};
__export(updateElection_exports, {
  updateElection: () => updateElection
});
module.exports = __toCommonJS(updateElection_exports);
var import_joi = __toESM(require("joi"));
var import_DB = require("../../DB");
var import_Exceptions = require("../../Exceptions");
async function updateElection(request, response, next) {
  try {
    const newRequest = request;
    const { electionId } = newRequest.params;
    validatePickupId(electionId);
    const election = await import_DB.ElectionOptionRepository.findFirst({ where: { id: Number(electionId) } });
    if (!election)
      throw import_Exceptions.Exceptions.invalidRequest("No Election found");
    const { status, description, title, options } = newRequest.body;
    const data = { status, description, title };
    const updated = await import_DB.ElectionRepository.update({ where: { id: Number(electionId) }, data });
    const newOptions = options.map(async (option) => {
      const data2 = {
        title: option.title,
        description: option.description,
        pollId: Number(electionId)
      };
      if (!option.id) {
        return await import_DB.ElectionOptionRepository.create({ data: data2 });
      }
      return await import_DB.ElectionOptionRepository.update({ where: { id: Number(option.id) }, data: data2 });
    });
    await Promise.allSettled(newOptions);
    response.json(updated);
  } catch (err) {
    next(err);
  }
}
function validatePickupId(pickupId) {
  const schema = import_joi.default.object({
    pickupId: import_joi.default.number().required()
  });
  const isValid = schema.validate({ pickupId }, {
    errors: {
      wrap: { label: "" }
    }
  });
  if (isValid.error?.details)
    throw import_Exceptions.Exceptions.invalidRequest("ElectionId must be valid");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  updateElection
});
