import Node from "./node";
import BinarySearchTree from "./binary_search_tree";

const BalanceFactor = {
  UNBLANCED_RIGHT: 1,
  SLIGHTLY_UNBLANCED_RIGHT: 2,
  BLANCED: 3,
  SLIGHTLY_UNBLANCED_LEFT: 4,
  UNBLANCED_LEFT: 5,
};

class AdelsonVelskiiTree extends BinarySearchTree {
  public root;
  constructor() {
    super();
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
      parent.left = this.inserNode(parent.left, node);
      if (parent.left !== null) {
        const leftH = this.getNodeHeight(node.left);
        const rightH = this.getNodeHeight(node.right);
        // 确认是否需要平衡
        if (leftH - rightH > 1) {
          // 旋转
          node = this.rotationLL(node);
        } else {
          node = this.rotationLR(node);
        }
      }
      // if (parent.left === null) {
      //   parent.left = node;
      // } else {
      //   this.inserNode(parent.left, node);
      // }
    } else {
      parent.right = this.inserNode(parent.right, node);
      if (parent.right !== null) {
        // 确认是否需要平衡
        if (
          this.getNodeHeight(node.right) - this.getNodeHeight(node.left) >
          1
        ) {
          //旋转
          node = this.rotationRR(node);
        } else {
          node = this.rotationRL(node);
        }
      }
      // if (parent.right === null) {
      //   parent.right = node;
      // } else {
      //   this.inserNode(parent.right, node);
      // }
    }
    return node;
  }
  getNodeHeight(node) {
    if (node === null) {
      return -1;
    }
    return Math.max(
      this.getNodeHeight(node.left),
      this.getNodeHeight(node.right) + 1
    );
  }
  getBalanceFactor(node) {
    const heightDiff =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDiff) {
      case -2:
        return BalanceFactor.UNBLANCED_RIGHT; // 1
      case -1:
        return BalanceFactor.SLIGHTLY_UNBLANCED_RIGHT; // 2
      case 1:
        return BalanceFactor.SLIGHTLY_UNBLANCED_LEFT; // 4
      case 2:
        return BalanceFactor.UNBLANCED_LEFT; // 5
      default:
        return BalanceFactor.BLANCED; // 3
    }
  }
  rotationRR(node) {
    var tmp = node.right; // {1}
    node.right = tmp.left; // {2}
    tmp.left = node; // {3}
    return tmp;
  }
  rotationLL(node) {
    var tmp = node.left; // {1}
    node.left = tmp.right; // {2}
    tmp.right = node; // {3}
    return tmp;
  }
  rotationLR(node) {
    node.left = this.rotationRR(node);
    return this.rotationLL(node);
  }
  rotationRL(node) {
    node.right = this.rotationLL(node);
    return this.rotationRR(node);
  }
}
export default AdelsonVelskiiTree;
