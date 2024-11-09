"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInterval = exports.setTimeout = void 0;
const lodash_1 = require("lodash");
const originalSetTimeout = globalThis.setTimeout.bind(globalThis);
const originalSetInterval = globalThis.setInterval.bind(globalThis);
const setTimeout = (callback, ms = 0) =>
  originalSetTimeout(ms ? (0, lodash_1.throttle)(callback, ms) : callback, ms);
exports.setTimeout = setTimeout;
const setInterval = (callback, ms = 0) =>
  originalSetInterval(ms ? (0, lodash_1.throttle)(callback, ms) : callback, ms);
exports.setInterval = setInterval;
