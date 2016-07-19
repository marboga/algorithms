function Node(value){
	this.val = value;
	this.next = null;
}

function slQueue(){
	var head = null;
	var tail = null;
	this.enqueue = function(node){
		if (type(node) !== object) { return }
		if (head === null) {
			head = node;
			var curr = node;
		} else {
			var curr = head;
			while (curr.next) {
				curr = curr.next;
			}
			curr.next = node;
		}
		tail = curr;
		return tail;
	}


}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);

var queue = new slQueue();
queue.enqueue(node1);
queue.enqueue(node2);
queue.enqueue(node3);

console.log(queue)
