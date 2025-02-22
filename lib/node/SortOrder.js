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
var SortOrder_exports = {};
__export(SortOrder_exports, {
  GENERAL_97_SORT_ORDER: () => GENERAL_97_SORT_ORDER,
  GENERAL_LEGACY_SORT_ORDER: () => GENERAL_LEGACY_SORT_ORDER,
  GENERAL_SORT_ORDER: () => GENERAL_SORT_ORDER
});
module.exports = __toCommonJS(SortOrder_exports);
const GENERAL_SORT_ORDER_VALUE = 1033;
const GENERAL_97_SORT_ORDER = Object.freeze({ value: GENERAL_SORT_ORDER_VALUE, version: -1 });
const GENERAL_LEGACY_SORT_ORDER = Object.freeze({ value: GENERAL_SORT_ORDER_VALUE, version: 0 });
const GENERAL_SORT_ORDER = Object.freeze({ value: GENERAL_SORT_ORDER_VALUE, version: 1 });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GENERAL_97_SORT_ORDER,
  GENERAL_LEGACY_SORT_ORDER,
  GENERAL_SORT_ORDER
});
