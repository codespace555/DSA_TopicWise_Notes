function Node(value) {

  this.value = value;

  this.next = null;

}


function reverseLinkedList(head) {

  let prev = null;

  let current = head;

   while (current !== null) {

    let next = current.next;

    current.next = prev;

    prev = current;

    current = next;

  }


  return prev;

}


var head = new Node(1);

head.next = new Node(2);

head.next.next = new Node(3);

var reversed = reverseLinkedList(head);

console.log(reversed.value);