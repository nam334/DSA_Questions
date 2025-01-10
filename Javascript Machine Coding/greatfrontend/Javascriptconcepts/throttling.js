//click of a button
const clickme = document.getElementById("clickme");
const clickHandler = () => {
  console.log("clicked");
};

const debounce = (func, delay) => {
  let timer;
  console.log("initial id", timer);
  return (...args) => {
    console.log("previous id", timer);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
clickme.addEventListener("click", debounce(clickHandler, 500));
