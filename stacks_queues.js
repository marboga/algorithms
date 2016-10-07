function Stack(){
  var main = [];
  this.pop = function(){
    if (main){
      return main.pop();
    }
  }
  this.top = function(){
    if (main){
      return main[main.length-1]
    }
  }
  this.size = main.length;

  //1.  write this.push

  this.push = function(val){
	  if (val){
		  return main.push(val);
	  }
  }
  //2.  write this.contains
  this.contains = function(val){
	  for (var i = 0; i < main.length; i++) {
	  	 if(main[i] === val){
			 return true;
		 }
	  }
	  return false;
  }
}

function Queue(){
  function Node(val){
    this.val = val;
    this.next = undefined;
  }
  var head;
  var tail;
  this.enqueue = function(val){
    var node = new Node(val);
    if (!head){
      head = node;
      tail = head;
      return this;
    }
    var current_tail = tail;
    tail.next = node;
    node.next = current_tail;
    return this;
  }
  // 3. write a dequeue function
  this.dequeue = function(val){

  }
  // 4. write a peek (front) function using this queue implementation

}
  // 5. What data type usually underlies a circular queue?
  // 6. In a circular queue does the head point to an index or a value?
  // 7. What operator (division, multiplication, modulus, addition, subtraction) is used to keep a counter inside a specific range ie. counter ++; counter = counter (operator) max_range
  // 8. What is a priority queue? long answer

  // 9. Bonus: implement a deck (dequeue (double ended queue)): this data structure can do FIFO or LIFO operations, basically one structure doing stack and queue functionality!
  // 10. Bonus2:  implement an insert @ location (index) in a queue!  How efficient can you get this while maintaining the remaining efficiency?
