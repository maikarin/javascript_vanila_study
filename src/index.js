import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

console.log("Im working test console message js");

const title = document.querySelector("#title");
const BASE_COLOR = "red";
const OTHER_COLOR = "blue";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
  console.log(currentColor, title.style.color);
}

function init() {
  title.style.color = OTHER_COLOR;
  title.addEventListener("click", handleClick);
}

init();

/*
// prompt
const age = prompt("How old are you?");

if (age > 18) {
  console.log("you can drink beer");
} else {
  console.log("you can't drink beer");
}
*/

/*
// Modifying DOM
const title = document.querySelector("#title");

function handleClick() {
  if (title.style.color == "blue") {
    title.style.color = "red";
  } else {
    title.style.color = "blue";
  }
}

window.addEventListener("click", handleClick);
*/

/*
// event handler
function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);
*/

/* using document 
const title = document.getElementById("title");
title.innerHTML = "Hi~~~~~";
title.style.color = "red";
document.title = "change text";
console.log(title);
*/

/* class
const calculator = {
  plus: function(a, b) {
    return a + b;
  }
};

const sum = calculator.plus(5, 5);
console.log(sum);
*/

/* fucntion
function sayHello(name, age) {
  //console.log("Hello" + name + "you are" + age + "years old");
  //console.log(`Hello ${name} you are ${age} years old`);
  return `Hello ${name} you are ${age} years old`;
}

console.log(sayHello("Nicolas", 15));
*/

/* Arrays
const userinfo = {
  name: "nicolas",
  age: 55,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Dark Knight", "Begins", "Oldlady"],
  favFoods: [
    {
      name: "Kimchi",
      fatty: false
    },
    {
      name: "Cheese Burger",
      fatty: true
    }
  ]
};
console.log(userinfo);

console.log(userinfo.favFoods[1].name);

// is possible const struct vaiable info change
userinfo.gender = "Female";
console.log(userinfo.gender);
*/

/* days
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);
*/

/* let, const
let a = 100;
let b = a - 5;
a = 4;
console.log(b, a);
*/

/* String
const what = "nicolas";
console.log(what);
*/

/* Boolean
const what = true;
*/

/* Number
const what = 121313123;
*/

/* float
const what = 55.1;
console.log(what);
*/
