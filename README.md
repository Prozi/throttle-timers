## Usage

```
{ setTimeout, setInterval } require('throttle-timers');

globalThis.setTimeout = setTimeout;
globalThis.setInterval = setInterval;
```

## Then

all your `setInterval` and `setTimeout`

calls won't happen too often as they're protected by `lodash` `throttle` with the same time

automagically

## Install

```
npm i throttle-timers -D
```

## License

MIT
