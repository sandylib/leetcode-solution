/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    var pointerA = headA, pointerB = headB;
    while(pointerA !== pointerB) {
        pointerA = pointerA !== null ? pointerA.next : headB;
        pointerB = pointerB !== null ? pointerB.next : headA;
    }

    return (pointerA == pointerB && pointerA !== null) ? pointerA :null;
    
};