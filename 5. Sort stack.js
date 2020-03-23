// incomplete - No array

sortStack = (s1) => {

  var s2 = new Array();

  while (s1[0]) {
    var tmp = s1.pop();
    console.log("s2[0]: ",s2[0])

    while (s2[0] && s2[0] > tmp) {
      s1.push(s2.pop());
    }

    s2.push(tmp);
  }

  console.log('Sorted stack = ', s2);
}

var s1 = new Array();
s1.push(3);
s1.push(6);
s1.push(1);
s1.push(2);
s1.push(5);
s1.push(4);

sortStack(s1);