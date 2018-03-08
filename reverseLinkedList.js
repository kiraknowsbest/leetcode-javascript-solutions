// https://leetcode.com/problems/reverse-linked-list/
const reverseList = head => {
  let cur = head,
    next = pre = null;
  while(cur !== null) {
  	// retain reference to node.next
    next = cur.next;
    // change the reference point of node.next
    cur.next = pre;
    // retain reference to current node
    pre = cur;
    // set cur to the next unaltered node
    cur = next;
  }
  // return new head of linked list
  return pre;
};