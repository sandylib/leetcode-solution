/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 function ListNode(val) {
         this.val = val;
         this.next = null;
     }
var addTwoNumbers = function(l1, l2) {

    var head = new ListNode(0);
    var iterator = head;

   
   while(l1 != null || l2 != null){
  
       if(l1 != null){
           iterator.val += l1.val;
           l1 = l1.next;
       }
       
       if(l2 != null){
           iterator.val += l2.val;
           l2 = l2.next;
       }

       //consider placement for next values (and overflows)
       if(l1 != null || l2 != null || iterator.val > 9){
           iterator.next = new ListNode(0);
           if(iterator.val > 9){
               iterator.next.val = 1; 
               iterator.val -= 10; 
           }
       }
       iterator = iterator.next;
   }

   return head;
}

var l1 = [2,4,3];
var l2 = [5,6,4]
addTwoNumbers(l1,l2);
    
var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};