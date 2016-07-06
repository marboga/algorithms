//AddFront(val), AddBack(val), RemoveFront, RemoveBack, Front, Back, IsEmpty, Count, Contains(val)

function SLNode(val) {
	this.val = val;
	this.next = null;
}

function linkedList(head) {
	this.head = head;
// }
// function listNode(list){
	// this.head = list;
	// this.next = null;
	this.addFront = function(val) {
		var node = new SLNode(val);
		node.next = this.head;
		return node;
	}

	this.addBack = function(val) {
		var curr = this.head;
		while (curr.next) {
			curr = curr.next;
		}
		curr.next = new SLNode(val);
		return this.head;
	}

	this.removeBack = function() {
		var curr = this.head;
		if (!curr || !curr.next) {return null};
		while (curr.next.next) {
			curr = curr.next;
		}
		curr.next = null;
		return this.head;
	}

	this.removeFront = function() {
		if (!this.head.next) {return null;}
		this.head = this.next;
		return this.head;
	}

	this.front = function() {
		if (!this.head){return null}
		return this.head.val;
	}

	this.back = function() {
		if (!this.head.next) {return this.head.val}
		var curr = this.head;
		while (curr.next) {
			curr = curr.next;
		}
		return curr.val;
	}

	this.isEmpty = function() {
		if (!this.head) {
			return "is empty"
		}
	}

	this.count = function() {
		if (!this.head) {return 0}
		var count = 1;
		var curr = this.head;
		while (curr.next) {
			count += 1;
			curr = curr.next;
		}
		return count;
	}
	this.contains = function(val) {
		var curr = this.head;
		while(curr.next) {
			if (curr.val == val) {
				return true
			}
			curr = curr.next;
		}
		return false;
	}
	this.containsLoop = function() {
		if (!this.head.next) {return false}
		var walker = this.head;
		var runner = this.head.next;
		while (runner) {
			if (!runner.next) {return false}
			if (walker.next == runner.next.next) {
				return true;
			}
			walker = walker.next;
			runner = runner.next.next;
		}
	}
	this.breakLoop = function() {
		if (this.containsLoop() == true) {
			var walker = this.head;
			var runner = this.head.next;
			while (walker.next) {
				walker.visited = true
				if (runner.next.visited == true) {
					console.log(runner.val)
					runner.next = null;
					return runner
				} else {
					walker = walker.next;
					runner = runner.next.next;
				}
			}

		}
		return false;
	}
	this.breakLoop2 = function() {
		if (this.containsLoop() == true) {
			var walker = this.head;
			var runner = this.head.next;
			while (walker.next) {
				if (walker.next == runner.next) {
					console.log(walker.val, runner.val)
					var flag = runner
					walker = this.head
					while (runner.next) {
						if (runner.next === walker) {
							runner.next = null
							return runner.val
						}
						if (runner.next === flag) {
							walker = walker.next
						}
						runner = runner.next
					}
				} else {
					walker = walker.next
					runner = runner.next.next
				}
			}
		}
		return false
	}

}

var node1 = new SLNode(1)
var node2 = new SLNode(2)
var node3 = new SLNode(3)
var node4 = new SLNode(4)
var node5 = new SLNode(5)
var node6 = new SLNode(6)
var node7 = new SLNode(7)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node3


list = new linkedList(node1)
var result = list.breakLoop2()

console.log(JSON.stringify(result))
