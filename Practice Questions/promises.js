//PROMISES AND PROMISE CHAINING

const cart = ["dress", "shoes", "kurti"];

//creating an order
console.log(createOrder(cart));

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })

  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = "Cart is not valid";
      reject(err);
    }
    let orderId = "12345";
    setTimeout(function () {
      resolve(orderId);
    }, 3000);
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`Payment successful with order id ${orderId}`);
    }, 5000);
  });
}
function validateCart(cart) {
  return true;
}
