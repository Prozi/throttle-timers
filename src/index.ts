import { throttle } from "lodash";

const originalSetTimeout = globalThis.setTimeout.bind(globalThis);
const originalSetInterval = globalThis.setInterval.bind(globalThis);

export const setTimeout = (callback: (...args: any[]) => void, ms = 0) =>
  originalSetTimeout(ms ? throttle(callback, ms) : callback, ms);

export const setInterval = (callback: (...args: any[]) => void, ms = 0) =>
  originalSetInterval(ms ? throttle(callback, ms) : callback, ms);
