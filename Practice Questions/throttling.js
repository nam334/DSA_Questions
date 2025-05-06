const func = () => console.log("window resized");

const throttle = (fn, d) => {
  let flag = true;
  return function (...args) {
    // console.log(this);
    if (flag) {
      fn.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, d);
    }
  };
};
const throttleHandler = throttle(func, 100);

window.addEventListener("resize", throttleHandler);
