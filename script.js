// console, alert, document, const, var, let, new, class, if, else if, else, switch, constructor, private, public, localStorage, sessionStorage,

// VARIABLE
var a = 10;
a = 12;
var a = "orange"; //ecmascript5 es5 es6

let b = 50;
b = "ball";

const c = 100;
// c = 15

let d; //variable declaration
d = 10; // variable Initialization
// let e = "Drizzle"

const e = "orange";
const casesensitive = "orange";
const CASESENSITIVE = "Banana";

const chiamaka = "chiamaka";

const number1 = 150;
const lowercase = "lower";
const UPPERCASE = "upper";
const camelCase = "camel";
const PascalCase = "Pascal";
const snake_case = "snake";

// console.log(casesensitive)

// DATA TYPES: string, number, boolean, undefined, null, array, object, symbol.

// NUMBER => ARITHMETIC OPERATOR: + - * / ** %

const addition = 2 + 2;
const multiply = 5 * 5;
const subtract = 10 - 5;
const division = 25 / 5;
const exponential = 2 ** 4;
const modulus = 10 % 3;

// OPERATOR PRECEDENCE => BODMAS

const precedence = (2 + 5) * 6 - 5 * 10;

const discount = 10;
const amount = 2000;
const simpleInterest = (discount / 100) * amount;
// console.log(amount - simpleInterest)
const commissionPercent = 5;
const totalAmountMade = 250000;
const userPercentage = (commissionPercent / 100) * totalAmountMade;

// console.log(userPercentage)

// COMPARISON OPERATOR: < > >= <= == === != !== !

const greaterthan = 120 > 40;
const lessThan = 120 < 40;
const greaterthanOrEqual = 50 >= 0;
const lessThanOrEqual = 10.1 <= 10;
const equal = 10 == "10";
const strictEqual = 10 === "10";
const notEqual = 10 != "10";
const strictNotEqual = 10 !== "10";

// console.log(notEqual)

// MATH FUNCTIONS:

const min = Math.min(1, 2, 5, 67, 9, 50);
const max = Math.max(1, 2, 5, 67, 9, 50);
const floor = Math.floor(10.9);
const ceil = Math.ceil(10.1);
const round = Math.round(10.5);
const sqrt = Math.sqrt(4);
const pow = Math.pow(2, 5);
const random = Math.floor(Math.random() * 10 + 1);
// console.log(random)

const number = Number("10.4") + Number("10.3");
// number.toFixed(0)
const largeNumber = Intl.NumberFormat().format(12000000);

// STRING
const name = "ORANGE".toUpperCase();
const lowerCase = "ORANGE".toLowerCase();
const getLength = "orange".length;
const include = "orange".includes("A");
const startWith = "orange".startsWith("g");
const endsWith = "Orange".endsWith("g");
const substring = "orange".substring(0, 4) + "...";
const slice = "orange".slice(0, 3);
const replace = "I love Livescript".replace("Live", "Java");
const replaceAll =
  "Febraury First, Francis Father Fried Five Fresh Fish For Five Famous Fellow".replaceAll(
    "F",
    "B",
  );
const concat = "ora".concat("nge");
const at = "orange".at(0);
const charAt = "orange".charAt(1);
const charCodeAt = "orange".charCodeAt(1);
const split = "orange".split("").join("-");
const reverse = "you love I".split(" ").reverse().join(" ");
const flipWord = "uoy evol I".split("").reverse().join("");

const fruits = [
  "Apple",
  "Mango",
  "Pineapple",
  "Orange",
  "Grape",
  "Kiwi",
  "Strawberry",
  "Rasberry",
  "Peach",
  "Pear",
];

fruits.push("Coconut", "Carrot", "Cucumber");
fruits.unshift(
  "Guava",
  "Tangerine",
  "Pawpaw",
  "Blackberry",
  "Avocado",
  "lemon",
);
fruits.pop();
fruits.shift();

// clone or copy
let foods = ["rice", "beans", ...fruits, "potatoes"];
const ingredients = ["Maggie", "Salt", "Curry", "Locust beans"];
const concatArray = foods.concat(ingredients);

const flattenArray = [1, 2, 3, 4, 5, 6, 7, [8, 9, 10]];
const flatArray = flattenArray.flat();

const every = flatArray.every((v, i) => {
  return v > 2;
});

const reduce = flatArray.reduce((c, a) => {
  return c + a;
}, 0);

const filterFruits = fruits.filter((i) => {
  return i.toLowerCase() !== "MANGO".toLowerCase();
});

const findFruit = fruits.find((f) => {
  return f.toLowerCase() === "Kiwi".toLowerCase();
});

const someFruits = fruits.some((fruit) => {
  return fruit.toLowerCase() === "Avocado".toLowerCase();
});

const splice = fruits.splice(2, 5);
const findIndex = fruits.findIndex((v) => {
  return v === "Orange";
});

const sortArray = flatArray.sort((a, b) => {
  return b - a;
});

// console.log(sortArray)

// console.log(endsWith)

// OBJECTS

const arrayLIke = [20];

const user = {
  name: "Uthman Abdulazeez",
  gender: "male",
  age: 12,
};

const cloneData = { ...user, email: "uthman@gmail.com", password: "12345" };

// DESTRUCTURE METHOD

cloneData.mobileNo = "+2348159832838";
const { name: fullname, gender } = cloneData;
const { password, ...rest } = cloneData;

// JSON:
const users = [
  {
    id: 1,
    fullname: "Uthman",
    gender: "male",
  },
  {
    id: 2,
    fullname: "Masturo",
    gender: "female",
  },
];

const maleUsers = users.filter((user) => {
  return user.gender === "male";
});

// LOOPS: for,  for in, for of, map, while,  do while,

//INCREMENT: ++ -- -= +=

for (let i = 0; i < 20; i++) {
  // console.log(i)
  if (fruits[i] === "Mango") {
    continue;
  }
  // console.log(fruits[i])
}

for (const i in fruits) {
  // console.log(fruits[i])
}

for (const fruit of fruits) {
  // console.log(fruit)
}

fruits.map((f, i) => {
  // console.log(f)
});

// CONDITIONAL => CONTROL FLOWS | ternary operator
// const userAge = 30
// const grade = 0.5
// if(grade <= 1.0){
//     console.log('Ewo!')
// }else if(grade <= 2.0){
//     console.log('Pass!')
// } else if(grade <= 3.5){
//     console.log('second lower')
// }else if(grade <= 4.5){
//     console.log('Second Upper')
// }else{
//     console.log('first class')
// }

// FUNCTIONS: NAMING FUNCTION, ARROW FUNCTION
// function greetUser(){}
// const getUser = function(){}
// const fetchUser = ()=>{}

function printHello() {
  console.log("Hello, I am inside a function");
  let user = "orange";
  const cars = ["Jaguar", "Toyota", "Honda", "BMW", "Benz"];
  for (const car of cars) {
    console.log(car);
  }
}

function takeParameter(a, b) {
  console.log(a + b);
}

// takeParameter(5, 10)
// takeParameter(20, 40)

function checkNumber(a, b) {
  if (a > b) {
    console.log(a + " is greater than " + b);
  } else if (b > a) {
    console.log(b + " is greater than " + a);
  } else {
    console.log("Both numbers are equal");
  }
}

function greetUser(username) {
  console.log("hello " + username);
}

// greetUser("orange")
// greetUser("Oranov")
// printHello()

// CLOSURE
function closure() {
  // let user = "Fuhad"
  console.log(user);
}
// closure()

// FUNCTION RETURN
function returnDiscountPrice(price, discount) {
  const discountedPrice = price - (discount / 100) * price;
  // const discountValue =  (discount / 100) * price
  return discountedPrice;
}

// const discountPrice = returnDiscountPrice(100, 10)
// const mobileDiscount = returnDiscountPrice(33000, 5)
// console.log(mobileDiscount)
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// DATE FUNCTION
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const today = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const miliseconds = date.getMilliseconds();
const setDate = date.setDate(3);
// console.log(setDate)

// TEMPLATE LITERAL || STRING INTERPOLATION || CONCATINATION
const first_name = "orange";
const last_name = "oranov";
const greetings =
  "Welcome " + first_name + " " + last_name + " and your age is ";
const welcomeUser = `Welcome ${first_name} ${last_name}`;
// console.log(greetings)

// UNARY OPERATOR

const unaryNumber = +"8";
// console.log(unaryNumber)

// CONVERSION: STRING, NUMBER, BOOLEAN

// const isString = String(90)
const isString = 90;
// console.log(typeof isString.toString())

const isBool = Boolean("true");
// console.log(typeof isBool)

// TYPE CHECKING: TYPEOF, ARRAY.ISARRAY

// const isArray = Array.isArray(fruits)
// Array.from({length: 10, }).map((_, i)=>{
//     console.log(i)
// })

// localStorage.setItem("user", JSON.stringify(fruits))
// const data = localStorage.getItem("user")
// const localData = JSON.parse(data)
// localStorage.removeItem("user")
// localStorage.clear()
// console.log(localData)

navigator.geolocation.getCurrentPosition((location) => {
  const { accuracy, longitude, latitude } = location.coords;
});

const audio = new Audio();

// alert('HEllo')
// API,  PROMISES

// BROWSER API

// DOM
const heading = document.createElement("h1");

heading.style.color = "red";
heading.textContent = "Musa";
document.body.appendChild(heading);

/**
//  GETTERS
 * get element by id
 * get element by tag name
 * get element by class name
 * query selector 
 * query selector all
 * 
 * SETTERS
 * text content
 * inner text
 * inner html
 */

const title = document.getElementById("title");
title.style.color = "orange";
title.innerHTML = "Welcome <span style='color: blue;'> to JS</span>";

const pic = document.getElementById("image");

pic.src = "assets/hero.png";
pic.setAttribute("src", "assets/hero.png");

function theme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    document.body.style.backgroundColor = theme;
  } else {
    localStorage.setItem("theme", "white");
  }
}

// theme();

const button = document.getElementById("btn");

// CHANGE LIGHT AND DARK MODE ON CLICK
button.addEventListener("click", function () {

  const theme = localStorage.getItem("theme");
    document.body.style.backgroundColor = theme;
    theme === "white"
      ? localStorage.setItem("theme", "white")
      : localStorage.setItem("theme", "white");
     
  
});


const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    const dollarAmount = Number(document.getElementById("input").value)
    const amountTag = document.getElementById("display-amount")
    const currentDollarPrice = 1350
    const result = dollarAmount * currentDollarPrice
    amountTag.innerHTML = `$${Intl.NumberFormat().format(dollarAmount)} is equivalent to &#8358;${Intl.NumberFormat().format(result)}`    
})


