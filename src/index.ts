import { throttle } from "lodash";

const oldSetTimeout = setTimeout;
const oldSetInterval = setInterval;

globalThis.setTimeout = ((callback: (args: void) => void, ms = 0) =>
  oldSetTimeout(ms ? throttle(callback, ms) : callback, ms)) as any;
globalThis.setInterval = ((callback: (args: void) => void, ms = 0) =>
  oldSetInterval(ms ? throttle(callback, ms) : callback, ms)) as any;
