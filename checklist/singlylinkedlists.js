//AddFront(val), AddBack(val), RemoveFront, RemoveBack, Front, Back, IsEmpty, Count, Contains(val)

function SLNode(val) {
	this.val = val;
	this.next = null;
}

function listNode() {
	this.val = val;
	this.next = null;
	this.addFront(val) {
		var node = new SLNode(val);
		node.next = this.head;
		return node;
	}

	this.addBack(val) {
		var curr = this.head;
		while (curr.next) {
			curr = curr.next;
		}
		curr.next = new SLNode(val);
		return this.head;
	}

	this.removeBack() {
		var curr = this.head;
		if (!curr || !curr.next) {return null};
		while (curr.next.next) {
			curr = curr.next;
		}
		curr.next = null;
		return this.head;
	}

	this.removeFront() {
		if (!this.head.next) {return null;}
		this.head = this.next;
		return this.head;
	}

	this.front() {
		if (!this.head){return null}
		return this.head.val;
	}

	this.back() {
		if (!this.head.next) {return this.head.val}
		var curr = this.head;
		while (curr.next) {
			curr = curr.next;
		}
		return curr.val;
	}

	this.isEmpty() {
		if (!this.head) {
			return "is empty"
		}
	}

	this.count() {
		if (!this.head) {return 0}
		var count = 1;
		var curr = this.head;
		while (curr.next) {
			count += 1;
			curr = curr.next;
		}
		return count;
	}
	this.contains(val) {
		var curr = this.head;
		while(curr.next) {
			if (curr.val == val) {
				return true
			}
			curr = curr.next;
		}
		return false;
	}
}
