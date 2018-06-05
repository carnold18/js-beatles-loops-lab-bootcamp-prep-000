const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments) {
  var newArray = [];
  for (var i=0; i < 4; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

const facts = [ "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var newArray2 = [];
  while (facts[i] > 0) {
    return newArray2[i]+"!!!";
  }
}

function iLoveTheBeatles(i) {
  var newArray3 = [];
  do {
    newArray3.push("I love the Beatles!");
    i++;
    return newArray3;
  }
  while (i < 14);
}