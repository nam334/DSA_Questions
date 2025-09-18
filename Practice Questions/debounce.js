// const makeApiCall = () => {
//   console.log("API call logged");
// };

// const debouncedFunction = (cb, delay) => {
//   let timerId = "";
//   return function (...args) {
//     let context = this;
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       cb.apply(context, args);
//     }, delay);
//   };
// };

// const debounce = debouncedFunction(makeApiCall, 2000);
// const changeHandler = (e) => {
//   debounce();
// };

const clickHandler = (e) => {
  console.log(e.target.dataset.userName);
  console.log(e.target.getAttribute("data-user-name"));
};
