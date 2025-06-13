function flattenDeepObject(obj) {
  let result = {};
  function recurse(obj, prefix = "") {
    for (let key in obj) {
      const value = obj[key];
      const newkey = prefix ? `${prefix}.${key}` : key;
      if (
        typeof value === "object" &&
        value !== "null" &&
        !Array.isArray(value)
      ) {
        recurse(value, newkey);
      } else {
        result[newkey] = value;
      }
    }
  }
  recurse(obj);
  return result;
}

console.log(flattenDeepObject({ a: { b: 1, c: { d: 2 } }, e: 3 }));
