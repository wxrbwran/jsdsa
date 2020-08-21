import AVLTree from "./adelson_velskii_tree";
import { RedBlackNode, Colors } from "../models/red-black-node";

class RedBlackTree extends AVLTree {
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
      this.fixTreeProperties(newNode);
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
    } else if (node.right === null) {
      node.right = new RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    } else {
      this.inserNode(node.right, key);
    }
  }
  fixTreeProperties(node) {
    while (
      node &&
      node.parent &&
      node.parent.isRed() &&
      node.color !== Colors.BLACK // 2
    ) {
      let parent = node.parent; //3
      let grandParent = parent.parent; //4
      // A: 父节点是左侧子节点
      if (grandParent && grandParent.left === parent) {
        //5
        const uncle = grandParent.right; //6
        // 1A 叔节点也为红色 只需重新填色
        if (uncle && uncle.color === Colors.RED) {
          //7
          grandParent.color = Colors.RED;
          parent.color = uncle.color = Colors.BLACK;
          node = grandParent; // 8
        } else {
          // 2A 节点是右侧子节点 - 左旋转
          if (node === parent.right) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          } else {
            // 3A 节点是左侧子节点 - 右旋转
            this.rotationLL(grandParent);
            parent.color = Colors.BLACK;
            grandParent.color = Colors.RED;
            node = parent;
          }
        }
      } else {
        // B 父节点是右侧子节点
        const uncle = grandParent.left;
        // 1B 叔节点也为红色 只需重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // 2B 节点是右侧子节点 - 左旋转
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          } else {
            // 3B 节点是左侧子节点 - 右旋转
            this.rotationRR(grandParent);
            parent.color = Colors.BLACK;
            grandParent.color = Colors.RED;
            node = parent;
          }
        }
      }
    }
  }
  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
  }
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if (node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
  }
}

export default RedBlackTree;
