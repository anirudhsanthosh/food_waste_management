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
var loanTemplates_exports = {};
__export(loanTemplates_exports, {
  getLoanTemplates: () => getLoanTemplates
});
module.exports = __toCommonJS(loanTemplates_exports);
async function getLoanTemplates(request, response, next) {
  const loans = [
    { name: "HDFC" },
    { name: "Federal Bank" },
    { name: "SBI" },
    { name: "ICICI" },
    { name: "Kotak Mahindra" }
  ];
  response.json(loans);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getLoanTemplates
});
