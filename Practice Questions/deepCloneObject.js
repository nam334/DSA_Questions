function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) return obj.map((ob) => deepClone(ob));

  let clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

const original = { a: { b: { c: 3 } } };
const cloned = deepClone(original);
console.log(cloned);
console.log(cloned !== original);
console.log(cloned.b !== original.b);
