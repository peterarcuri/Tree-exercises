/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {    

    if(!this.root) return 0;
    let sum = this.root.val; // start with curren node's value
    
    
    function dfs(node) { // Helper function

      
      for(let child of node.children) {
        sum += child.val; // sum the values of the children

        if(child.children.length > 0) {
          dfs(child);
        }
      }  
    }
    dfs(this.root); // call dfs() on the root and return the sum
    return sum;    
  };


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

      if (!this.root) return 0;
      let count = this.root.val % 2 === 0 ? 1 : 0; // check if current node's value is even

      function helperCount(node) { // helper function

        for(let child of node.children) {
          if(child.val % 2 === 0) count++;

          if(child.children.length > 0) {
            helperCount(child);
          }
        }
      }
      helperCount(this.root)
      return count;
  };



  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(x) {

    if (!this.root) return 0;
    let count = this.root.val > x ? 1 : 0; // check if node's value is greater than x

    function numGreaterHelper(node) { // Helper function

      for(let child of node.children) {  // count in each child node

        if(child.val > x) count++;

        if(child.children.length > 0) {
          numGreaterHelper(child);
        }
      }
    }
    numGreaterHelper(this.root);
    return count;
  }
};


module.exports = { Tree, TreeNode };

