//AddFront(val), AddBack(val), RemoveFront, RemoveBack, Front, Back, IsEmpty, Count, Contains(val)

function SLNode(val) {
	this.val = val;
	this.next = null;
}

function linkedList() {
	this.head = null;
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

	this.len = function() {
		if (this.head) {
			var length = 1
			var curr = this.head
		} else {
			return 0;
		}
		while (curr.next) {
			curr = curr.next;
			length ++;
		}
		return length;
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
			return "is empty";
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
				return true;
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
				walker.visited = true;
				if (runner.next.visited == true) {
					console.log(runner.val);
					runner.next = null;
					return runner;
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
					var flag = runner;
					walker = this.head;
					while (runner.next) {
						if (runner.next === walker) {
							runner.next = null;
							return runner.val;
						}
						if (runner.next === flag) {
							walker = walker.next;
						}
						runner = runner.next;
					}
				} else {
					walker = walker.next;
					runner = runner.next.next;
				}
			}
		}
		return false;
	}

	this.kthFromLast = function(k) {
		if (k < 1) {return null;}
		if (!this.head) {return null;}
		var curr = this.head;
		var follower = curr;
		while (curr) {
			if (k > 0) {
				curr = curr.next;
				k--;
			} else if (k === 0) {
				curr = curr.next;
				follower = follower.next
			}
		}
		if (k > 0) return null;
		return follower;
	}

	this.reverse = function() {
		var alreadyDone = null;
		var current = this.head;
		var yetToDo;
		if (!current.next) {return current}
		while (current.next) {
			yetToDo = current.next;
			current.next = alreadyDone;
			alreadyDone = current;
			current = yetToDo;
		}
		current.next = alreadyDone
		this.head = current;
		return this.head
	}
	this.minToFront = function() {
		if (!this.head) { return null }
		var min = this.head;
		var curr = this.head;
		while (curr.next) {
			if (curr.next.val < min.val) {
				min = curr.next;
				var minPrev = curr;
			}
			curr = curr.next;
		}
		if (minPrev) {
			minPrev.next = curr.next;
			curr.next = this.head;
			this.head = curr
		}
		return this.head
	}
	this.prependVal = function(value, before) {
		var node = new SLNode(value)
		if (!this.head) { this.head = node }
		var curr = this.head
		while (curr.next) {
			if (curr.next.val == before) {
				node.next = curr.next;
				curr.next = node;
				return this.head;
			}
			curr = curr.next
		}
		curr.next = node;
		return this.head;
	}

}

var node1 = new SLNode(1)
list = new linkedList()
list.head = node1
list.addBack(2)
list.addBack(3)
list.addBack(4)
list.addBack(5)
list.addBack(6)
list.addBack(7)
list.addBack(8)
list.addBack(9)
list.addBack(10)
list.addBack(11)
list.addBack(12)

var result = list.prependVal(38,8)

console.log(JSON.stringify(result))
