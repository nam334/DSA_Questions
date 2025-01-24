const deepCopy = (input) => {
  if (typeof input !== "object") return input;
  let inp = Array.isArray(input) ? [] : {};
  for (key in input) {
    const value = input[key];
    inp[key] = deepCopy(value);
  }
  return inp;
};

const player = {
  firstName: "namrata",
  lastName: "das",
  location: {
    city: "Dibrugarh",
    state: "Assam",
  },
};
const copy = deepCopy(player);
copy.location.city = "patna";
console.log("original", player);
console.log("copy", copy);
