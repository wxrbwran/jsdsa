import BinarySearchTree from "./binary_search_tree";
import { RedBlackNode, Colors } from "../models/red-black-node";

class RedBlackTree extends BinarySearchTree {
  constructor() {
    super();
    this.root = null;
  }
  insert(key) {
    if (this.root === null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.inserNode(this.root, key);
      this.fixTreeProperties();
    }
  }
  inserNode(node, key) {
    if (key < node.key) {
      if (node.left === null) {
        node.left = new RedBlackNode(key);
        // node.left.color = Colors.RED;
        node.left.parent = node;
        return node.left;
      } else {
        return this.inserNode(node.left, key);
      }
    }
  }
  fixTreeProperties() {}
}

export default RedBlackTree;
