function scrollHandler() {
  console.log("scrolling");
}

function throttle(fn, delay, options = {}) {
  let leading = false,
    trailing = false;
  let lastcall = 0;
  //implement leading as false

  //implement using Date.now

  return function (...args) {
    let context = this;
    let now = Date.now();
    let timerId = "";
    if (!leading && lastcall === 0) lastcall = now;
    if (now - lastcall > delay) {
      fn.apply(context, args);
      lastcall = now;

      clearTimeout(timerId);
      timerId = "";
    }
    //implement trailing
    else if (trailing && !timerId) {
      setTimeout(() => {
        fn.apply(context, args);
        lastcall = leading ? now : 0;
        timerId = "";
      });
    }
  };
}

const throttledFunction = throttle(scrollHandler, 4000);
