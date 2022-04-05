class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head == null;
  }

  toArray() {
    if (this.isEmpty()) {
      console.log("Nothing Here");
    } else {
      var arr = [];
      var runner = this.head;
      while (runner) {
        arr.push(runner.data);
        runner = runner.next;
      }
      return arr;
    }
  }

  insertAtBack(val) {
    if (this.isEmpty()) {
      this.head = new Node(val);
    } else {
      var runner = this.head;
      while (runner.next != null) {
        runner = runner.next;
      }
      runner.next = new Node(val);
    }
  }

  // insertAtFront()
  insertAtFront(val) {
    var newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  removeHead() {
    if (this.head == null) {
      console.log("list is empty");
      return;
    }
    var temp = this.head.next;
    this.head = temp;
  }
  average() {
    if (this.head == null) {
      return 0;
    }

    var sum = 0;
    var length = 0;
    var runner = this.head;

    while (runner != null) {
      sum += runner.data;
      length++;
      runner = runner.next;
    }
    return sum / length;
  }
  // figure out non numbers
}

var mySLL = new SLL();
mySLL.insertAtBack(3);
mySLL.insertAtBack(4);
mySLL.insertAtBack(5);
mySLL.insertAtBack(6);
console.log(mySLL);
console.log(mySLL.toArray());
mySLL.insertAtFront(7);
console.log(mySLL.toArray());
mySLL.removeHead();
console.log(mySLL.toArray());
console.log(mySLL.average());
console.log(mySLL.toArray());
