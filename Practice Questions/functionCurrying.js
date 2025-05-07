// const add = (...args) => args.reduce((acc, sum) => acc * sum, 1);

// const curry = (fn) => {
//   let args = [];
//   const curried = (...arguments) => {
//     if (arguments.length === 0) return fn(...args);

//     args = [...args, ...arguments];

//     return curried;
//   };
//   return curried;
// };

// const curriedFunction = curry(add);
// const result = curriedFunction(1)(2)(3)(4)();
// console.log(result);

//EXAMPLES OF CURRYING
//1.
// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" },
// ];

// //Filter the nmaes with role admin

// const filterBy = (property) => {
//   return (role) => {
//     return (users) => {
//       return users.filter((item) => item[property] === role);
//     };
//   };
// };

// console.log(filterBy("role")("admin")(users));

//2.
//Function currying to attach an event listener
//handleEvent(eventType)(element)(eventHander function)

const handleEvent = (eventType) => {
  return (element) => {
    return (eventHandler) => {
      element.addEventListener(eventType, eventHandler);
    };
  };
};

const button = document.querySelector("button");
handleEvent("click")(button)(() => console.log("button clicked"));

const divElement = document.querySelector("div");
handleEvent("mouseenter")(divElement)(() => console.log("Entered div"));
