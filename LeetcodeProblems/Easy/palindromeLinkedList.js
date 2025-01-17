// Input: head = [1,2,2,1]
// Output: true

// Input: head = [1,2]
// Output: false
// Definition for singly-linked list.
// * function ListNode(val, next) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.next = (next===undefined ? null : next)
// * }
// */
// /**
// * @param {ListNode} head
// * @return {boolean}
// */
var isPalindrome = function (head) {
  let string1 = "",
    string2 = "";
  let node = head;
  while (node !== null) {
    string1 = `${string1}${node.val}`;
    string2 = `${node.val}${string2}`;
    node = node.next;
  }
  return string1 === string2;
};

console.log(isPalindrome([1, 2, 2, 1]));
console.log(isPalindrome([1, 2]));
