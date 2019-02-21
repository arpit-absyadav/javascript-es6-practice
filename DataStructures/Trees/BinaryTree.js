class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    //   checking that if tree is empty
    //   If empty this.root will be null
    if (node === null) {
      // becuse the tree is empty
      // setting the value to root
      this.root = new Node(node);
      return;
    } else {
      // if Tree is not empty.  Recursice ::searchTree:: method to fill tree
      const searchTree = node => {
        // checkin that the data is less then root
        if (data < node.data) {
          //   got to end of the left side
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
            /**
             * `return searchTree(node.left);`
             * above line passing `node.left` becuse if we are adding the data which is grater
             * then the left elemet.
             * So, We are passing curerent `node.left` so  the `data will be >== node` data
             * and the process will got to else.
             * The blow condition to add right leaf
             */
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        } // equal
      };
      return searchTree(node);
    }
  }
  findMin() {
    /**
     * Setting up the root ad current and then will loop to left.
     * Beacuse The Binary tree is sorted
     */
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    /**
     * Setting up the root ad current and then will loop to right.
     * Beacuse The Binary tree is sorted
     */
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return current.data;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  /**
   * Remove
   * NOTE: return will set the node reference null.
   */
  remove(data) {
    const removeNode = () => {
      if (data === null) {
        return null;
      }
      if (data == node.data) {
        //   Node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        //   Node has no left child
        //   replacing with right node
        if (node.left == null) {
          return node.right;
        }
        //   node has no right child
        if (node.right == null) {
          return node.left;
        }
        //   node has two children
        var tempNode = node.right;
        while (tempNode.left != null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    //   passingt the root node and the data we are searchin for..
    this.root = removeNode(node.root, data);
  }
}

const bst = new BST();
bst.add(4);
bst.add(5);
bst.add(2);
bst.add(1);
// bst.add(4);
bst.add(7);
bst.add(9);
bst.add(8);
console.log(bst.findMin());
