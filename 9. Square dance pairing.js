pairDancers = (list) => {
  let maleQ = []
  let femaleQ = []
  // Create Male and Female Queues
  while (list[0]) {
    let tempDancer = list.shift();
    if (tempDancer[0] == 'M') {
      maleQ.push(tempDancer)
    } else femaleQ.push(tempDancer)
  }
  console.log(maleQ, femaleQ);
  // Pair M+F Dancers
  while ( maleQ[0] && femaleQ[0] ) {
    console.log(`Female dancer is ${femaleQ.shift().slice(2)}, and male dancer is ${maleQ.shift().slice(2)}`)
  }

  if (maleQ.length > femaleQ.length) {
    console.log(`There are ${maleQ.length} male dancers waiting to dance`)
  } else {
    console.log(`There are ${femaleQ.length} female dancers waiting to dance`)
  }
}

let danceList = [
  'F Jane',
  'M Frank', 
  'M John', 
  'M Sherlock', 
  'F Madonna',
  'M David',
  'M Christopher',
  'F Beyonce'
];

pairDancers(danceList);