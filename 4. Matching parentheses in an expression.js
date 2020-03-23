const strPass = "()"
const strFail = "(wkd(kwdkn)"
const advTest = "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"

// allMatchedV1 = (str) => {

//   const pair = {
//     "(": ")"
//   }

//   if (str.length < 2) {
//     return false
//   }
//   let openStack = [];
//   let closeStack = [];
//   // Add brackets to stack in order
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "(" || str[i] == ")") {
//       openStack.push(str[i])
//     }
//   }
  
//   // Check if stacks are equal;
//   if (openStack.length == closeStack.length) {
//     return false
//   }

//   // Check parentheses are matched in order
//   while (stack.length > 0) {
//     if (openStack.pop )
//     unmatched.push(stack.pop());
//   }

//   if (unmatched.length == 0) {
//     return true
//   } else return false

// }

function isValid(str) {

  if (str.length <= 1)
    return false

  let matchingOpeningBracket, ch
  let stack = []

  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']

  for (let i = 0; i < str.length; i++) {
    ch = str[i]

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
        return false
      }
    } else {
      stack.push(ch)
    }
  }

  return (stack.length == 0)
};

console.log(isValid(strPass));