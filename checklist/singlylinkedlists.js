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
		this.head = node;
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

	this.push = function(node) {
		node.next = this.head;
		this.head = node;
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
	this.splitOnVal = function(value) {
		if (!this.head) { return null }
		var curr = this.head
		if (this.head.val == value) {
			this.head = null;
			return curr;
		}
		while (curr.next) {
			if (curr.next.val == value) {
				var rest = curr.next;
				curr.next = null;
				return rest;
			}
			curr = curr.next
		}
		return this.head;
	}

	this.popFront = function() {
		var temp = this.head;
		this.head = this.head.next;
		temp.next = null;
	}

	// this.partition = function(value) {
	// 	if (!this.head) { return null }
	// 	var firstHalf = new linkedList();
	// 	firstHalf.head = this.head
	// 	var secondHalf = new linkedList();
	// 	secondHalf.head = firstHalf.splitOnVal(
	// 	console.log(secondHalf.head, "asrfalvbsfub")
	// 	var thirdHalf = secondHalf.popFront();
	// 	var firstCurr = firstHalf;
	// 	var secondCurr = secondHalf;
	// 	console.log("firstCURR",JSON.stringify(firstCurr))
	// 	console.log("secondCURR", JSON.stringify(secondCurr))
	// 	while (firstCurr.next) { //go through firsthalf
	// 		if (firstCurr.next.val >= value) {
	// 			var temp = firstCurr.next
	// 			firstCurr.next.next = null;
	// 			secondHalf.push(firstCurr.next);
	// 			firstCurr.next = temp.next;
	// 		}
	// 		else if (firstCurr.next.val == value) {
	// 			thirdHalf.push(firstCurr.next)
	// 			firstCurr.next = firstcurr.next.next
	// 		}
	// 		firstCurr = firstCurr.next
	// 	}
	// 	while (secondCurr.next) {
	// 		if (secondCurr.next.val < value) {
	// 			var temp = secondCurr.next;
	// 			secondCurr.next.next = null;
	// 			firstHalf.push(secondCurr.next);
	// 			secondCurr.next = temp.next;
	// 		}
	// 		else if (secondCurr.next.val == value) {
	// 			thirdHalf.push(secondCurr.next)
	// 			secondCurr.next = secondcurr.next.next
	// 		}
	// 		secondCurr = secondCurr.next
	// 	}
	// 	var thirdCurr = thirdHalf;
	// 	while (firstCurr.next) {
	// 		firstCurr = firstCurr.next;
	// 	}
	// 	console.log("SECONDHALF", secondHalf.head)
	// 	firstCurr.next = firstHalf.head;
	//
	// 	this.head = firstHalf.head
	// 	// while (thirdCurr.next) {
	// 	// 	thirdCurr = thirdCurr.next;
	// 	// }
	// 	thirdCurr.next = secondCurr;
	// 	return this.head;
	// }

	this.partition = function(value) {
		var curr = this.head;
		if (!curr.next) { return this.head }
		// console.log("h1",half1, "\n","h2",half2)
		var tooBig = new linkedList();
		var tooSmall = new linkedList();
		var tail;
		while (curr.next) {
			var temp = curr.next
			curr.next = curr.next.next;
			if (temp.val >= value) {
				//remove node with larger value from list
				tooBig.push(temp);
			} else {
				if (!tooSmall.head) { tail = temp }
				tooSmall.push(temp);
			}
		}
		if (curr.val > value) {
			//remove node with larger value from list
			tooBig.push(curr);
		} else if (curr.val == value) {
			justRight.push(curr);
		} else {
			tooSmall.push(curr);
		}
		this.head = tooSmall.head;
		tail.next = tooBig.head;
		return this.head;
	}

	this.secondToLastVal = function() {
		if (!this.head || !this.head.next || !this.head.next.next) {
			return null;
		}
		var curr = this.head;
		while(curr.next.next) {
			curr = curr.next
		}
		return curr.val;
	}

	this.filter = function(headNode, lowVal, highVal) {
		var curr = headNode;
		if (headNode.val > highval || headNode.val < lowVal) {
			headNode = headNode.next
		}
		while(curr.next) {
			if (curr.next.val > highVal || curr.next.val < lowVal) {
				curr.next = curr.next.next
			}
			curr = curr.next
		}
		return headNode;
	}
	this.removeNode = function(node) {
		if node.next{
			node = node.next
		}
	}
}
// Second to Last Value
// Create a standalone function that, given a pointer to the first node in a singly-linked list, will return the second-to-last value in that list. If the list isn't long enough, return null.
// Filter
// Given a headNode, lowVal and highVal, remove from the list any nodes that have values less than lowVal or higher than highVal. Return the new list.
// Remove Single Node (Challenging!)
// Create a function removeNode(node) that takes in a pointer to only a single node (i.e. you don't have a pointer to the list itself) and remove it.
// Here's a hint: You could be provided any node in the list except the last node.

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
list.addBack(0)
list.addBack(1)
list.addBack(2)

var result = list.secondToLastVal()

console.log("RESULT", JSON.stringify(result))
// console.log(JSON.stringify(list))
