import { throttle } from 'lodash';

const oldSetTimeout = setTimeout;
const oldSetInterval = setInterval;

globalThis.setTimeout = ((callback: (args: void) => void, ms = 0) =>
  oldSetTimeout(throttle(callback, ms), ms)) as any;
globalThis.setInterval = ((callback: (args: void) => void, ms = 0) =>
  oldSetInterval(throttle(callback, ms), ms)) as any;
