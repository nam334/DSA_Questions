//1   2   2   1

const reverse = (head) => {
  let curr = head;
  let prev = null;
  let nextNode;
  while (curr.next) {
    nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
};

var isPalindrome = function (head) {
  let fast = head,
    slow = head,
    length,
    startPoint = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    length++;
  }
  let mid = reverse(slow);
  while (length) {
    length--;
    if (mid.val !== startPoint.val) return false;
    mid = mid.next;
    startPoint = startPoint.next;
  }
  return true;
};
