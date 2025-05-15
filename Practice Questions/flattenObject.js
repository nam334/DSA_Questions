function flattenObject(obj, result, key) {
  // Your implementation
  for (let [k, value] of Object.entries(obj)) {
    let keyVal = key ? key + "." + k : k;

    if (typeof value === "object") {
      for (let [key, val] of Object.entries(value)) {
        let newkeyVal = keyVal + "." + key;

        result[newkeyVal] = val;

        if (typeof val === "object") {
          flattenObject(val, result, newkeyVal);
        }
      }
    }
  }

  return result;
}

function flat(obj) {
  let result = {},
    key = "";
  return flattenObject(obj, result, key);
}

//{ a:
// {
// b: { c: 2 },
// d: 3
// }
//}

//For the purpose of user debugging.
//console.log(flattenObject({ a: { b: 1 } }));
//console.log(flat({ a: { b: 1 } }));
console.log(flat({ a: { b: { c: 2 }, d: 3 } }));
// I/P: {a:{b:1}}
// O/P: {"a.b": 1}
