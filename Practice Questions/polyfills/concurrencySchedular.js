function concurrencySchedular(tasks, limit) {
  return new Promise((resolve, reject) => {
    let index = 0,
      activeCount = 0,
      finishedCount = 0,
      results = [];

    function runNext() {
      if (finishedCount === tasks.length) {
        resolve(results);
        return;
      }

      while (activeCount < limit && index < tasks.length) {
        const currentIndex = index;
        const task = tasks[currentIndex];
        index++;
        activeCount++;
        task()
          .then((res) => {
            results[currentIndex] = res;
          })
          .catch((err) => reject(err))
          .finally(() => {
            activeCount--;
            finishedCount++;
            runNext();
          });
      }
    }

    runNext();
  });
}

function sleep(ms) {
  return function () {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  };
}

const tasks = [sleep(3000), sleep(2000), sleep(1000), sleep(4000), sleep(1500)];

concurrencySchedular(tasks, 2).then((results) => {
  console.log("All tasks finished with results:", results);
});
