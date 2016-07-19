//creating a circular queue class

function Node(value) {
	this.val = value;
	this.next = null;
}

function cirQueue(cap) { //takes in max capacity
	var head = 0;
	var tail = 0;
	var capacity = cap;
	var arr = [];
	this.front = function() {
		return arr[head]
	}
	this.enqueue = function(val){
		arr[tail] = val;
		if (tail > cap - 1){

		} else {
			tail++;
		}
	}
}
