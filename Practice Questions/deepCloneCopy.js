let obj = {
  name: "Namrata",
  skill: "React",
  address: {
    city: "Dibrugarh",
    state: "Assam",
  },
};

function deepclone(ob) {
  if (typeof ob !== "object" || ob === null) return ob;

  let clone = {};
  for (let i in ob) {
    if (ob.hasOwnProperty(i)) {
      clone[i] = deepclone(ob[i]);
    }
  }
  return clone;
}

let person = deepclone(obj);
person.state = "WB";

console.log("person - ", person, "obj - ", obj);
