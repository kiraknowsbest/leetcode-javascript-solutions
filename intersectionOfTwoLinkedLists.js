// https://leetcode.com/problems/intersection-of-two-linked-lists/description/
// with two pointers moving forward one node at a time,
// the pointers should equal each other eventually if we
// make them traverse both linked lists - that would sync
// their location as each would go through n + m nodes
// and they would reach the intersection at the same time
var getIntersectionNode = function(headA, headB) {
    // pointer to a node in each list, a flag on if the list was completed
    let cur1 = headA,
        cur2 = headB,
        nextList1 = false,
        nextList2 = false

    // if cur1 and cur2 are still pointing to a node
    while (cur1 !== null && cur2 !== null) {
        // if pointers have switched to the other list
        if(nextList1 === true && nextList2 === true) {
            // if cur1 is cur2, that is the intersection
            if(cur1 === cur2){
                return cur1;
            } else if (cur1 === null || cur2 === null) {
                return null;
            }
        }

        // move pointers forward
        cur1 = cur1.next;
        cur2 = cur2.next;

        // if a pointer is null and hasn't switched to
        // the other list, set it to the opposite head
        if (!cur1 && !nextList1) {
            cur1 = headB;
            nextList1 = true;
        }
        if (!cur2 && !nextList2) {
            cur2 = headA;
            nextList2 = true;
        }

    }
    return null;
};
