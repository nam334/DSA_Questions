function expensive(data) {
  console.log("expensive", data);
}

const throttle = (func, wait) => {
  let flag = true;
  return (...args) => {
    let context = this,
      arg = args;
    if (flag) {
      func.apply(context, arg);
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, wait);
  };
};

window.addEventListener("resize", throttle(expensive("namrata"), 500));
