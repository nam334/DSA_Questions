// Given the root of a binary tree, return the same tree where every subtree (of the given tree)
//  not containing a 1 has been removed.

// A subtree of a node node is node plus every node that is a descendant of node.
// Input: root = [1,null,0,0,1]
// Output: [1,null,0,null,1]
// Explanation:

// Only the red nodes satisfy the property "every subtree not containing a 1".
// The diagram on the right represents the answer.

// Input: root = [1,0,1,0,0,0,1]
// Output: [1,null,1,null,1]

// Input: root = [1,1,0,1,1,0,1,0]
// Output: [1,1,0,1,1,null,1]

var pruneTree = function (root) {
  if (root.left !== null) root.left = pruneTree(root.left);
  if (root.right !== null) root.right = pruneTree(root.right);
  if (root.val === 0 && !root.left && !root.right) {
    //delete the node
    return null;
  }
  return root;
};

console.log(pruneTree([1, 1, 0, 1, 1, 0, 1, 0]));
