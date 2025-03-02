//print name N times

// function print(i) {
//   if (i === 5) return;
//   console.log("Namrata - ", i + 1);
//   i++;
//   print(i);
// }

// print(0);

//reverse an array

// function swap(arr, p, q) {
//   if (p > q) return arr;
//   [arr[p], arr[q]] = [arr[q], arr[p]];
//   p++, q--;
//   return swap(arr, p, q);
// }

// function reverseAnArray(arr) {
//   return swap(arr, 0, arr.length - 1);
// }
// console.log(reverseAnArray([4, 2, 1, 6, 3]));

//palindrone

// function palindrone(str) {
//   let p = 0,
//     n = str.length;
//   return checkPalindrome(str, p, n);
// }

// function checkPalindrome(str, p, n) {
//   if (p >= n / 2) return true;
//   if (str[p] !== str[n - p - 1]) return false;
//   p = p + 1;
//   return checkPalindrome(str, p, n);
// }

// console.log(palindrone("MADAM"));
// //console.log(palindrone("TASK"));

//printing subsequence

function sub(i, n, arr, ar) {
  if (i >= n) {
    console.log(arr);
    return;
  }
  arr.push(ar[i]);
  sub(i + 1, n, arr, ar);
  arr.pop(ar[i]);
  sub(i + 1, n, arr, ar);
}
function subsequence(ar) {
  let n = ar.length;
  return sub(0, n, [], ar);
}

subsequence([3, 1, 2]);
