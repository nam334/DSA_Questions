const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 is resolved"), 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 is resolved"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p3 is rejected"), 3000);
});

function MyPromiseRace([p1, p2, p3]) {
  return new Promise((resolve, reject) => {
    [p1, p2, p3]?.map((p) => {
      Promise.resolve(p)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  });
}

MyPromiseRace([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
