let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function randElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randWho() {
  return randElement(who);
}

function randAction() {
  return randElement(action);
}

function randWhat() {
  return randElement(what);
}

function randWhen() {
  return randElement(when);
}

function randExcuse() {
  return (
    randWho() + " " + randAction() + " " + randWhat() + " " + randWhen() + "."
  );
}

function putExcuse() {
  document.getElementById("excuse").innerHTML = randExcuse();
}
