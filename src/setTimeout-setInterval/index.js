/** REMEMBER THAT A TIMER CANNOT SPAN MORE THAN 24.8 DAYS */

// We know that setTimeout will run once the callback when the time has passed
/* This timeOut is used if we want to cancel our timer */
const timeOut = setTimeout(() => {
  console.log('5 seconds passed');
}, 5000);

/**
 * To use the node debugger we need to run: "node inspect index.js"
 * And then, we access to the inspect page in chrome: "chrome://inspect"
 */

debugger; // This is a breakpoint

/* We cancel our timer and the callback never runs */
clearTimeout(timeOut);

debugger; // This is a breakpoint

// We know that setInterval runs the callback every specified time in ms
const timeOutInterval = setInterval(() => {
  console.log("I'm running every 2 seconds!");
}, 2000);

clearInterval(timeOutInterval);
