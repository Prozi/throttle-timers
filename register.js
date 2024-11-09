const { setTimeout, setInterval } = require("throttle-timers");

globalThis.setTimeout = setTimeout;
globalThis.setInterval = setInterval;
