function makeCounter(initialValue = 0) {
  let count = initialValue;
  return () => {
    if (!initialValue) return 0;
    else {
      return count++;
    }
  };
}

const counter1 = makeCounter(5);
console.log(counter1()); // 5
console.log(counter1()); // 6
console.log(counter1()); // 7

const counter2 = makeCounter();
console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter2()); // 2
