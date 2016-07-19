function isPalindrome(head){
  var runner = head;
  var listLen = 0;
  while (runner) {
    listLen++;
    runner = runner.next;
  }
  var k = 1;
  while (k <= listLen / 2) {
    if (head.val !== kthLastValue(head,k)){
      return false;
    }
    head = head.next;
    k++;
  }
  return true;
}

function kthLastValue(head, k) {
  if (k < 1) { return null; }

  var leader = head;
  while (leader && k >= 1) {
    k--;
    leader = leader.next;
  }
  if (k >= 1) { return null; }

  var follower = head;
  while (leader) {
    leader = leader.next;
    follower = follower.next;
  }
  return follower.val;
}

function reverseList(head) {
  var next;
  var curr = head;
  var prev = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
