// https://leetcode.com/problems/reverse-linked-list/
const reverseList = head => {
    let cur = head;
    let next = null, pre = null;
    while(cur !== null) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};