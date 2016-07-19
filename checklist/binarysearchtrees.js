//Binary Search Tree - Create class definitions for BstNode and BST, including the following BST methods (non-recursive):  Add(val), IsEmpty, Contains(val), Min, Max
function Node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

function bST(root) {
	this.root = root;

	this.add = function(val) {
		var curr = this.root
		//here i need to find where my new node shall go
		while (curr.left || curr.right) {
			if (val < curr.val) {
				if (curr.left) {
					curr = curr.left
					// this.add(val, curr)
				} else {
					return curr.left

				}
			} else { //val >= curr.val
				if (curr.right) {
					curr = curr.right
					// this.add(val, curr)
				} else {
					return curr.right

				}
			}
		}
		//here i put it
		console.log(curr.val, "ending")
		if (curr.val > val) {
			curr.left = new Node(val)
			return 'left'
		} else {
			curr.right = new Node(val)
			return 'right'
		}
	}

	this.isEmpty = function(){
		if (!this.root) {
			return true
		} else {
			return false
		}
	}

	this.contains = function(val) {
		var curr = this.root
		while(curr) {
			if (curr.val == val) {
				return true
			} else if (curr.val > val) {
				if (curr.left) {
					curr = curr.left
				} else {
					return false
				}
			} else if (curr.val < val){
				curr = curr.right
			} else {
				return false
			}
		}
		return false
	}

	this.min = function() {
		var curr = this.root
		while (curr.left) {
			curr = curr.left
		}
		return curr.val
	}

	this.max = function() {
		var curr = this.root
		while (curr.right) {
			curr = curr.right
		}
		return curr.val
	}

	function internalSize(curr) {
		if (!curr) {
			return 0
		} else {
			return 1 + internalSize(curr.left) + internalSize(curr.right)
		}
	}
	this.size = function() {
		var root = this.root
		return internalSize(root)

	}
	this.contains = function(val) {
		if (!this.root) { return false }
		var curr = this.root
		while (curr) {
			if (val == curr.val) {
				return true
			} else if (val < curr.val) {
				curr = curr.left
			} else {
				curr = curr.left
			}
		}
		return false
	}
	this.height = function(node) {
		if (!node) { return 0 }
		var leftheight = this.height(node.left)
		var rightheight = this.height(node.right)
		return 1 + Math.max(leftheight, rightheight)
	}
	this.isBalanced = function(node, height) {
		if (!node) return 0
		var left = this.height(node.left, height + 1)
		var right = this.height(node.right, height + 1)
		console.log(left, right)
		if (Math.abs(left - right) > 1) {
			return false
		}
		return true
	}
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
var node5 = new Node(5)
var node6 = new Node(6)
var node7 = new Node(7)
// var node19 = new Node(19)
// var node29 = new Node(29)

node4.right = node6
node4.left = node2
node2.left = node1
node2.right = node3
node6.right = node7
node6.left = node5
// node19.right = node29

bst = new bST(node4)
bst.add(3)
bst.add(9)
bst.add(12)
bst.add(80)
// bst.add(2200)

// console.log("value returned ==", bst.add(100))
// console.log(JSON.stringify(bst))
// console.log(bst.contains(10))
// console.log(bst.min())
// console.log(bst.max())
// console.log(bst.size())
// console.log(bst.contains(2))
console.log("height:", bst.height(bst.root))
console.log("balanced:", bst.isBalanced(bst.root))
