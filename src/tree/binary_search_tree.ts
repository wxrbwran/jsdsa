import Node from "./node";

class BinarySearchTree {
  public root;
  constructor() {
    this.root = null;
  }
  insert(key) {
    const node = new Node(key);
    if (this.root === null) {
      this.root = node;
    } else {
      this.inserNode(this.root, node);
    }
  }
  inserNode(parent, node) {
    if (node.key < parent.key) {
      if (parent.left === null) {
        parent.left = node;
      } else {
        this.inserNode(parent.left, node);
      }
    } else {
      if (parent.right === null) {
        parent.right = node;
      } else {
        this.inserNode(parent.right, node);
      }
    }
  }
  search(key) {
    return this.searchNode(this.root, key);
  }
  searchNode(node, key) {
    if (node === null) {
      return false;
    } else if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }
  inOrderTraverse(callback) {
    // 中序遍历
    this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(parent, callback) {
    if (parent !== null) {
      this.inOrderTraverseNode(parent.left, callback);
      callback(parent.key);
      this.inOrderTraverseNode(parent.right, callback);
    }
  }
  preOrderTraverse(callback) {
    // 先序遍历
    this.preOrderTraverseNode(this.root, callback);
  }
  preOrderTraverseNode(parent, callback) {
    if (parent !== null) {
      callback(parent.key);
      this.preOrderTraverseNode(parent.left, callback);
      this.preOrderTraverseNode(parent.right, callback);
    }
  }
  postOrderTraverse(callback) {
    // 后序遍历
    this.postOrderTraverseNode(this.root, callback);
  }
  postOrderTraverseNode(parent, callback) {
    if (parent !== null) {
      this.postOrderTraverseNode(parent.left, callback);
      this.postOrderTraverseNode(parent.right, callback);
      callback(parent.key);
    }
  }
  min() {
    return this.minNode(this.root);
  }
  minNode(node) {
    if (node) {
      while (node && node.left) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  }
  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    if (node) {
      while (node && node.right) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  }
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // node.key === key
      // 1. 一个叶节点
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // 2. 只有一个子节点的节点
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // 有两个子节点的节点
      let aux = this.findMinNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
  findMinNode(node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }
}
export default BinarySearchTree;
