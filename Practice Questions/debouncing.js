const fetchData = () => {
  console.log("Data fetched");
};

const debounce = (fn, d) => {
  let timer;
  return function (args) {
    // console.log(this);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, d);
  };
};
const debouncedFunction = debounce(fetchData, 300);
document.querySelector("input").addEventListener("keyup", debouncedFunction);
