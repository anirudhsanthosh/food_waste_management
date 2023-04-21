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
var gptcontroller_exports = {};
__export(gptcontroller_exports, {
  gpt: () => gpt
});
module.exports = __toCommonJS(gptcontroller_exports);
var import_axios = __toESM(require("axios"));
async function gpt(request, response, next) {
  const prompt = request.body.message;
  console.log({ prompt });
  try {
    const aiResponse = await import_axios.default.post("https://api.openai.com/v1/chat/completions", {
      "model": "gpt-3.5-turbo",
      "messages": [{ "role": "user", "content": prompt }],
      "temperature": 0.7
    }, {
      headers: { Authorization: `Bearer ${process.env.apikey}` }
    });
    const message = aiResponse.data.choices[0]?.message?.content;
    response.json({
      from: "assistant",
      message
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  gpt
});
