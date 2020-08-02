class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null ? true : false;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  append(value) {
    let currentHead = this.head;
    let previousHead;

    if (this.head === null) {
      this.head = new Node(value, this.head);
      return;
    }

    while (currentHead !== null) {
      previousHead = currentHead;
      currentHead = currentHead.next;
    }

    previousHead.next = new Node(value, null);
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

    return true;
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
    let insertHead = new Node(value, nextHead);
    currentHead.next = insertHead;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let currentHead = this.head;

    for (let i = 0; i < index - 1; i++) {
      currentHead = currentHead.next;

      if (currentHead.next === null) {
        return;
      }
    }

    currentHead.next = currentHead.next.next;
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

const list = new SinglyLinkedList();

list.prepend(10);
list.print();
list.prepend(20);
list.print();
list.prepend(30);
list.print();
list.prepend(40);
// list.setHead(1);
// console.log(list.insert(5, 1));
list.print();
console.log(list);

// list.print();
// for (let i = 0; i < 10; i++) {
//   list.append(i + 1);
// }
// list.print();

// list.insert(1, 100);
// console.log(list.access(0));
// list.setHead(2);
// list.append(5);
list.remove(3);
list.print();

console.log(list);
