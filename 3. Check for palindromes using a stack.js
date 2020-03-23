function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  let arrForward = [];
  let arrBackward = [];

  for (let i = 0; i < s.length; i++) {
    let j = s.length - (i + 1);
    arrForward.push(s[i]);
    arrBackward.push(s[j]);
  }

  if (arrForward.length == arrBackward.length) {
    while (arrForward.length >= 1) {
      if (arrForward.pop() != arrBackward.pop()) {
        return false
      }
    } 
    return true;
  }
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));