class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null ? true : false;
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value, null, null);
      return;
    }

    this.head = new Node(value, null, this.head);
    // console.log(this.head);
    this.head.next.prev = this.head;
    // console.log(this.head);
  }

  append(value) {
    let currentHead = this.head;
    let previousHead;

    if (this.head === null) {
      this.head = new Node(value, null, null);
      return;
    }

    while (currentHead !== null) {
      previousHead = currentHead;
      currentHead = currentHead.next;
      // console.log(currentHead);
    }

    previousHead.next = new Node(value, previousHead, null);
  }

  setHead(index) {
    let currentHead = this.head;

    for (let i = 0; i < index; i++) {
      if (currentHead === null) {
        return false;
      }

      currentHead = currentHead.next;
    }

    this.head = currentHead;
    this.head.prev = null;
  }

  access(index) {
    let currentHead = this.head;

    for (let i = 0; i < index; i++) {
      if (currentHead === null) {
        return undefined;
      }

      currentHead = currentHead.next;
    }

    return currentHead.value;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return true;
    }

    let currentHead = this.head;

    for (let i = 0; i < index - 1; i++) {
      currentHead = currentHead.next;

      if (currentHead === null) {
        return false;
      }
    }

    let nextHead = currentHead.next;
    let insertHead = new Node(value, currentHead, currentHead.next);
    currentHead.next = insertHead;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }

    let currentHead = this.head;

    for (let i = 0; i < index - 1; i++) {
      currentHead = currentHead.next;

      if (currentHead.next === null) {
        return false;
      }
    }

    currentHead.next = currentHead.next.next;

    if (currentHead.next === null) {
      return;
    }

    currentHead.next.prev = currentHead;
  }

  print() {
    let currentHead = this.head;

    if (currentHead === null) {
      console.log("[]");
      return;
    }

    let s = "";
    while (currentHead !== null) {
      s += `${currentHead.value} `;
      currentHead = currentHead.next;
    }
    console.log(`[${s}]`);
  }
}

const list = new DoublyLinkedList();

list.prepend(10);
// console.log(list);
list.prepend(20);
list.prepend(30);
// list.prepend(40);
// list.access(1);
// list.insert(1, 1);
// list.print();
list.remove(4);
list.print();
console.log(list);
// list.prepend(30);
// list.prepend(40);
// list.append(5);
// console.log(list);
