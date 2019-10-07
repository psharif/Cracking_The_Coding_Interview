/**
 * Definition for a binary tree node.
 * validate on https://leetcode.com/problems/validate-binary-search-tree/
 * Watch solution by Tushar Roy on https://www.youtube.com/watch?v=MILxfAbIhrE
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isValidBST = root => {
  const helper = (root, min = null, max = null) => {
    if (root === null) return true;

    if ((max !== null && root.val >= max) || (min !== null && root.val <= min))
      return false;
    else
      return (
        helper(root.left, min, root.val) && helper(root.right, root.val, max)
      );
  };

  return helper(root);
};
