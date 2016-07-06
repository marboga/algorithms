//Binary Search Tree - Create class definitions for BstNode and BST, including the following BST methods (non-recursive):  Add(val), IsEmpty, Contains(val), Min, Max
function Node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

function bST(root) {
	this.root = root;

	this.add = function(val) {
		var newnode = Node(val)
		var curr = this.root
		//here i need to find where my new node shall go
		console.log(curr)
		while (curr) {
			 if (val == curr.val) {
				if (!curr.right) {
					curr.right = newnode
				} else if (curr.right.val > val) {
					newnode.right = curr.right
					curr.right = newnode
					return true
				} else {
					curr = curr.right
				}
			}
			if (val > curr.val) {
				if (curr.right) {
					if (curr.right.val < val) {
						curr = curr.right
						console.log('in if1')
					} else {
						console.log(curr.right.val, val, curr.val)
					}
				} else {
					curr.right = newnode
					return true
				}
				console.log('broke out1')
			}
			if (val < curr.val) {
				if (curr.left){
					if (curr.left.val > val) {
						curr = curr.left
						console.log('in if2')
					} else {
						console.log(curr.left.val, val, curr.val)
					}
				} else {
					curr.left = newnode
					return true
				}
				console.log('broke2')
			}
		}

		return false
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
				curr = curr.left
			} else if (curr.val < val){
				curr = curr.right
			}
		}
		if (curr.val == val) {
			return true
		} else {

			return false
		}
	}

}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
var node5 = new Node(5)
var node6 = new Node(6)
var node7 = new Node(7)

node4.right = node6
node4.left = node2
node2.left = node1
node2.right = node3
node6.right = node7
node6.left = node5

bst = new bST(node4)

console.log("value returned ==", bst.add(9))
console.log(JSON.stringify(bst))
console.log(bst.contains(9))
