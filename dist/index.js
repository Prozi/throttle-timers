"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const oldSetTimeout = setTimeout;
const oldSetInterval = setInterval;
globalThis.setTimeout = (callback, ms = 0) =>
  oldSetTimeout(ms ? (0, lodash_1.throttle)(callback, ms) : callback, ms);
globalThis.setInterval = (callback, ms = 0) =>
  oldSetInterval(ms ? (0, lodash_1.throttle)(callback, ms) : callback, ms);
