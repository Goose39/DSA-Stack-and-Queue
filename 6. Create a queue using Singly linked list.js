// TODO: Remove McCoy from your stack and display the stack

// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor() {
      this.first = null;
      this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
        this.first = node;
    }

    if (this.last) {
        this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
  if (this.first === null) {
      return;
  }
  const node = this.first;
  this.first = this.first.next;
    //if this is the last item in the queue
  if (node === this.last) {
      this.last = null;
  }
  return node.value;
  }
}

let starTrek = new Queue;
starTrek.enqueue("Kirk");
starTrek.enqueue("Spock");
starTrek.enqueue("Sulu");
starTrek.enqueue("Checkov");

peek = (queue) => {
  return queue.first;
}

isEmpty = (queue) => {
  if (queue.first == null) {
    return true
  } else return false
}

display = (queue) => {
  const arr = [];
  
  if (!isEmpty(queue)) {
    let currNode = queue.first
    
    while (currNode != null) {
      arr.push(currNode.data);
      currNode = currNode.next
    }    
  } else return "stack is empty";

  return arr;
}

module.exports = Queue;