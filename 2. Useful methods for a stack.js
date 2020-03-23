// TODO: Remove McCoy from your stack and display the stack

let starTrek = require("./1. Create a stack class.js");

peek = (stack) => {
  return stack.top;
}

isEmpty = (stack) => {
  if (stack.top == null) {
    return true
  } else return false
}

display = (stack) => {
  const arr = [];
  
  if (!isEmpty(stack)) {
    let currNode = stack.top
    
    while (currNode != null) {
      arr.push(currNode.data);
      currNode = currNode.next
    }    
  } else return "stack is empty";

  return arr;
}

console.log("peek: ",peek(starTrek));
console.log("isEmpty: ", isEmpty(starTrek));
console.log("display: ", display(starTrek));