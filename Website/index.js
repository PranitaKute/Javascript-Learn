//console.log("Hello");
//console.log("I like pizza");

//window.alert("This is an alert!");
//window.alert("I like pizza!");

//document.getElementById("myH1").textContent = "Hello";
//document.getElementById("myP").textContent = "I like pizza";

//This is a comment
/*
    This
    is
    a
    comment
*/

/* Variable: A container that stores a value
    Behaves as if it is were the value it contained
    Declaration - let x
    Assignment - x = 100    */

et age;
age = 19;
console.log(`You are ${age} years old!`);
console.log(typeof age);

let firstName = "Jack";
console.log(firstName);
console.log(typeof firstName);

let email = "jack123@gmail.com";
console.log(`Your email is ${email}`);
console.log(typeof email);

let cgpa = 9.1;
console.log(`Your cgpa is ${cgpa}!`);
console.log(typeof cgpa);

let online = true;
console.log(typeof online);
console.log(`Jack is Online : ${online}`);


let fullName = "Caleb Curry";
let age = 25;
let address = "USA";

document.getElementById("p1").textContent = `Your Name id ${fullName}!`;
document.getElementById("p2").textContent = `You are ${age} years old.`;
document.getElementById("p3").textContent = `You live in ${address}.`;



/* Arithmetic operators
    operands (values, variables, etc)
    operators (+, -, *, /)  */

//let students = 30;
//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2; exponent
//extraStudents = students % 2;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;

//students++;   //increases by 1
//students--;
//console.log(students);


/*Operator precedence
1. Paranthesis()
2. Exponent
3. Multiplication & division, modulus
4. addition & subtraction */

//let result = 1 + 2 * 3 + 4 ** 2;
//console.log(result);


/*How to accept user input?
1. Easy Way: Window prompt 
let username = window.prompt("What's your username?");
console.log(username);  */

//2. Professional Way: HTML TextBox
/*let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myUser").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Welcome ${username}`;

}       */



/*Type Conversion
Change the datatype of a value to another (string, number, boolean) */
let age = window.prompt("How old are you?");
age = Number(age);
age+=1;
console.log(age, typeof age);


let x = "";
let y = "";
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);       //NaN = Not A Number
console.log(y, typeof y);
console.log(z, typeof z);


//Constants: A variable can't be changed once you assign them
const PI = 3.14159;    //
let radius;
let circumference;

document.getElementById("submit").onclick = function(){
radius = document.getElementById("input").value;
radius = Number(radius);
circumference = 2 * PI * radius;
document.getElementById("ans").textContent = `Circumference is : ${circumference}`+"cm";
}


//Math: Built-in object that provides a collection of properties & methods
//console.log(Math.PI);
//console.log(Math.E);    //Eulers number

let a = 3;
let b = -30
let x = 3.99;
let y = 2;
let z;
//z = Math.round(x);
//z = Math.floor(x);    //round down
//z = Math.ceil(x);   //round up
//z = Math.trunc(x);  //eliminate decimal portion 
//z = Math.pow(y,a);
//z = Math.sqrt(81);
//z = Math.log(a);
//z = Math.sin(45);
//z = Math.cos(45);
//z = Math.abs(b);  //result positive no
z = Math.sign(b);
console.log(z);

let max = Math.max(a,b,y);
console.log(max);
let min = Math.min(a,b,y);
console.log(min);   


//If Statement: If a condition is true, execute the same code. If not, do something else
let age = 14;
if(age >= 18){
    console.log("You are old enough to enter this site!");
}
else{
    console.log("You must be 18+ to enter this site!");
}

let isStudent = false;
if(isStudent){
    console.log(`You are a Student!`);
}
else{
    console.log("You are NOT a Student!");
}


//checked: property that determines the checked state of html checkbox or radio button element

let mytext = document.getElementById("mytext");
const mycheckbox = document.getElementById("mycheckbox");
let termscondition = document.getElementById("termscondition");
const myButton = document.getElementById("myButton");
let myresult = document.getElementById("myresult");
const Yes = document.getElementById("Yes");
const NO = document.getElementById("No");
let mylicense = document.getElementById("mylicense");
myButton.onclick = function(){
   age = mytext.value;
    age = Number(age);

    if(mycheckbox.checked){
        termscondition.textContent = `You agree to terms and conditions`;
    }
    else{
        termscondition.textContent = 'You should agree to the terms and conditions';
    }

    if(age == 0){
        myresult.textContent = `You can't drive, you were just born!`;
}
else if(age >= 18){
    myresult.textContent =`You are old enough to drive!`;
    
    if(Yes.checked){
        mylicense.textContent =`You have your license!`;
    }
    else if(NO.checked){
        mylicense.textContent ="You do not have your license yet!";
    }
    else{
        mylicense.textContent = `You should select the option of whether you have license or not!`
    }
}
else if(age < 0){
    myresult.textContent =`Age cannot be negative! Please re-try!`;
}
else{
    myresult.textContent =`You must be 18+ to drive!`;
}
}

//let age = 0;
//let hasLicense = false;



//ternary operator: a shortcut to if() & else() statements helps to assign a variable based on condition 
//condition ? codeiftrue : codeiffalse;
let res = document.getElementById("res");
document.getElementById("submit").onclick = function(){
    let uid = document.getElementById("uid").value;
    let pswd = document.getElementById("pswd").value;
    let msg = (uid == "Pranita" && pswd == "1105") 
    ? "Login Successful!" 
    : "Invalid Password or Username..";
    res.textContent = msg;
}

let age = 23;
let msg = age >= 10 ? "You are an adult" : "You are not an adult";
console.log(msg);

let time = 16;
let greeting = time <= 12 ? "Good Morning" : "Good Afternoon";
console.log(greeting);

let purchaseamt = 125;
let discount = purchaseamt >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseamt - purchaseamt * (discount/100)}`);



//Switch: It is an efficient replacement to many else if statements
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Choice");
        break;
}

let testscore = 92;
let grade;
switch(true){
    case testscore >= 90:
        grade = 'A';
        break;
    
    case testscore >= 80:
        grade = 'B';
        break;
    
    case testscore >= 70:
        grade = 'C';
        break;

    case testscore >= 60:
        grade = 'D';
        break;

    default:
        grade = 'F';
}
console.log(grade);



//String methods: Allows to manipulate and work with text(strings)
let username = '  BroCode   ';
console.log(username.charAt(0));    //gives letter at specified position
console.log(username.indexOf('e'));  //it will return the index of first occurrence of the character
console.log(username.lastIndexOf('o'));
console.log(username.length);   //gives the length of a string
username = username.trim(); //trims the white spaces
console.log(username);
username = username.toUpperCase(); //to make uppercase
console.log(username);
username = username.toLowerCase(); //to make characters lowercase
console.log(username);
username = username.repeat(2);    //to repeat a string
console.log(username);
let result = username.startsWith(' ');  //to determine if a string starts with a given character
if(result){
    console.log("Username cannot start with a ' ' " );
}
else{
    console.log(username);
}
let result2 = username.endsWith(' ');  //to determine if a string ends with a given character
if(result2){
    console.log("Username cannot end with a ' ' " );
}
else{
    console.log(username);
}
let result3 = username.includes(' ');  //to determine if a string contains a given character
if(result3){
    console.log("Username cannot contain empty space");
}
else{
    console.log(username);
}

let phoneNumber = '844-699-2311';
phoneNumber = phoneNumber.replaceAll("-"," ")   //replaces specified character
console.log(phoneNumber);
phoneNumber = phoneNumber.padStart(15,"0");     //adds given character to achieve given length
console.log(phoneNumber)    



//String Slicing: Creating a substring from a portion of another string
//string.slice(start, end)
const fullName = 'Pagal Insaan';
let firstName = fullName.slice(0,5);
console.log(`First name is : ${firstName}`);

let lastName = fullName.slice(6,12);
console.log(`Last name is : ${lastName}`);

console.log(`First Character is : ${fullName.slice(0,1)}`);

console.log(`Last character is : ${fullName.slice(-1)}`);

console.log(`Display first name in dynamic way : ${fullName.slice(0, fullName.indexOf(" "))}`);

console.log(`Display last name in dynamic way: ${fullName.slice(fullName.indexOf(" ") + 1)}`);


const email = "pranitakute11@gmail.com";
let username = email.slice(0, email.indexOf("@"));
console.log(username);
let extension = email.slice(email.indexOf("@") + 1);
console.log(extension);


//Method Chaining: Calling one method after another in one continuous line of code
let username = window.prompt("Enter Your Username : ");

// --------------No Method Chaining---------------------
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars;
console.log(`Without Method Chaining ${username}`);

// -----------------Method Chaining-----------------------
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(`Method Chaining : ${username}`);


//Logical Operator: Used to combine or manipulate boolean values (true or false)
// AND: &&  OR : ||  NOT : !
const temp = 25;
if(temp <= 0 || temp > 30){
    console.log("Weather is bad!");
}
else{
    console.log("Weather is good!");
}

const isSunny = true;
if(!isSunny){
    console.log("It is Cloudy!");
}
else{
    console.log("It is Sunny!");
}


/*  = assignment operator
    == comparision operator (compare if values are equal)
    === strict equality operator (compare if values & datatype are equal)
    != inequality operator
    !== strict inequality operator      */

const PI = 3.14;
if(PI === 3.14){
    console.log("That is Pi!");
}
else{
    console.log("That is not PI!");
}

if(PI !== "3.14"){
    console.log("That is not Pi!");
}
else{
    console.log("That is PI!");
}  


//While loop: Repeat some code while some condition is true
let username = "";
while(username === ""){
    console.log("You didn't enter your name");
}
console.log(`Hello ${username}`);

let username = "";
do{
    username = window.prompt(`Enter Your Name : `);
}while(username === "" || username === null)    
console.log(`Hello ${username}`);

let loggedIn = false;
let uname;
let password;
do{
    uname = window.prompt("Enter your username ");
    password = window.prompt("Enter your password ");
    if(uname === "myusername" && password === "1234"){
        loggedIn = true;
        console.log("Welcome!");
    }
    else{
        console.log("Invalid Credentials! Please try again..");
    }
}while(!loggedIn)


//For loop : Repeat some code a LIMITED amount of times
//for (temp counter, condition, increment/decrement)
for(let i = 10; i >= 1; i--){
    console.log(i);
}
console.log("Happy new year!!....");

for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue;   //skips this iteration
    }
    if(i == 19){
        break;  //exit the loop entirely
    }
    console.log(i);
}


//Function: A section of reusable code
//  Declare code once, and use it whenever you want.
//  Call the function to execute that code

//username = window.prompt("What is your name?")
//age = window.prompt("How old have you turned today?")

function happyBirthday(username, age){
    console.log("Happy Birthday to you");
    console.log("Happy Birthday to you");
    console.log(`Happy Birthday to dear ${username}`);
    console.log("Happy Birthday to you");
    console.log("May god bless you");
    console.log("May god bless you");
    console.log(`Happy Birthday to dear ${username}`);
    console.log("Happy Birthday to you");
    console.log(`You are ${age} years old!`)
}

happyBirthday("Pranita", 19);           //arguments
console.log("---------------------------------------------------------")
happyBirthday("Shinchan", 5);

function add(x,y){
    return  x + y;
}
function sub(x,y){
    return  x - y;
}
function mul(x,y){
    return  x * y;
}
function div(x,y){
    return  x / y;
}
//let ans = add(4,5);
console.log(add(4,5));
console.log(sub(4,5));
console.log(mul(4,5));
console.log(div(4,5));

function evenodd(x){
    /*if(x % 2 === 0){
        return true;
    }
    else{
        return false;
    }   */

    return x % 2 === 0 ? true : false
}
console.log(evenodd(11));

function validEmail(emailid){
    /*if(emailid.includes('@')){
        return true;
    }
    else{
        return false;
    }   */

    return emailid.includes('@') ? true : false;
}
console.log(validEmail("pranita@fakegmail.com"))
console.log(validEmail("elonmusk.com"))


//Variable scope : Where a variable is recognised & accessible (local vs global)
//we can't declare variable with same name within same scope
//you can reuse the same variable as long as they are within different scope 
let y = 12;     //Global variable
function funct1(){
    let x = 5;      //local variable
    console.log(` Value of x in function 1: ${x}`);
    console.log(` Global variable y inside function 1: ${y}`);
    
}
function funct2(){
    let x = 10;     //local variable
    console.log(`Value of x in function 2: ${x}`);
}
funct1();
funct2();
console.log(`Global variable y out side a function: ${y}`); 


//Array : A variable like structure that can hold more than 1 value
let fruits = ["orange", "apple", "banana"];
console.log(fruits);
fruits[2] = "coconut";
console.log(fruits[2]);
fruits[4] = "strawberry";
fruits.push("Grapes");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("Mango");      //add element at the beginning
console.log(fruits);
fruits.shift();     //removes from beginning
console.log(fruits);
let arrLength = fruits.length;
console.log(arrLength);
let index = fruits.indexOf("apple");
console.log(index);
for(i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}
fruits.sort();      //sorts in alphabetical order
//fruits.sort().reverse();
//advanced for loop
for(let fruit of fruits){
    console.log(fruit);
}

let arr = new Array(7, 2, 8, 1, 3, 4);
let i, j, temp;
document.write("<br> Before Sorting... <br>");
for (i = 0; i < 6; i++){
    document.write(arr[i] +"<br>");
}
for(i = 0; i < 6; i++){
    for(j = 0; j < 5; j++){
        if(arr[j] > arr[j + 1]){
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
document.write("<br> <br> After Sorting... <br>");
for(i = 0; i < 6; i++){
    document.write(arr[i] + "<br>");
}


//Spread Operator (...) : Allows an iterable such as an array or a string to be expanded into separate elements (Unpack the elements)
let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(numbers);
console.log(maximum);
console.log(minimum);

let username = "Pranita Kute";
let letters = [...username].join("-");
console.log(letters);

let fruits = ["orange", "apple", "banana"];
let new_fruits = [...fruits];
console.log(fruits);
console.log(new_fruits);

let vegetables = ["Potato", "Brinjal", "Cabbage", "Tomato"];
let food = [...fruits,...vegetables, "eggs", "milk"];
console.log(food);


//Rest parameters : (...rest) allow a function work with a variable number of arguments by bundling them into an array
// spread - expands an array into separate elements
// rest - bundles separate elements into an array
function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}
const food1 = "Pizza"
const food2 = "Burger"
const food3 = "Sushi"
const food4 = "Noodles"
openFridge(food1, food2, food3, food4, "Ramen");
const foods = getFood(food1,food2,food3,food4);
console.log(foods);

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1,2,5,3,8,6);
console.log(`Your total is $${total}`);

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const total2 = getAverage(86,92,85,76,82);
console.log(`Average : ${total2}`);

function combineString(...strings){
    return strings.join(" ");
}
const fullname = combineString("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullname);



/*CallBack : A function that is passed as an argument to another function.
used to handle asynchronous operations:
1. Reading a file
2. Network requests
3. Interacting with databases

"Hey, when you are done, call this next*/
/*
hello();
goodbye();

function hello(){
    setTimeout(function(){
    console.log("Hello");
}, 3000);
}

function goodbye(){
    console.log("Goodbye");
}
**/
//Example 1
hello(wait);
function hello(callback){
    console.log("Hello!");
    callback();
}
function wait(){
    console.log("Wait");
}
function leave(){
    console.log("Leave");   
}
function goodbye(){
    console.log("Goodbye!");
}

//Example 2
sum(displayPage,5,6)
function sum(callback, x, y){
    result = x + y;
    callback(result);
}
function displayConsole(){
    console.log("Sum : ",result);
}

function displayPage(result){
    document.getElementById('myH1').textContent = result
}


/* forEach() : Method used to iterate over the elements of an array and apply
specified function (callback) to each element
array.forEach(callback)
*/
//Example 1
let nums = [1,2,3,4,5];
nums.forEach(cube);
nums.forEach(display);
function double(element, index, array){
    array[index] = element * 2;
}
function triple(element, index, array){
    array[index] = element * 3;
}
function square(element, index, array){
    array[index] = element * element;
}
function cube(element, index, array){
    array[index] = element * element * element;
}
function display(element){
    console.log(element);
}

//Example 2
let fruit = ['orange', 'apple', 'banana', 'coconut'];
fruit.forEach(uppercase)
fruit.forEach(capitalize)
fruit.forEach(display);
function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}
function lowercase(element, index, array){
    array[index] = element.toLowerCase();
}
function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}
function display(element){
    console.log(element);
}


/* map() : Accepts a callback and applies that function to each element 
of an array, then returns a new array */
//Example 1
const numberss = [1, 2, 3, 4, 5];
const squares = numberss.map(square1);
console.log(squares);
const cubes = numberss.map(cube1);
console.log(cubes);
function square1(element){
    return Math.pow(element, 2);
}
function cube1(element){
    return Math.pow(element, 3);
}

//Example 2
const students = ['spongebob', 'Patrick', 'Sandy'];
const studentUpper = students.map(uppercase1);
console.log(studentUpper)
const studentLower = students.map(lowercase1);
console.log(studentLower)
function uppercase1(element){
    return element.toUpperCase();
}
function lowercase1(element){
    return element.toLowerCase();
}

//Example 3
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates)
function formatDates(ele){
    const parts = ele.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}



/*filter(): Creates a new array by filtering out elements*/
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
console.log(evenNums);
let oddNums = numbers.filter(isOdd);
console.log(oddNums);
function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}

const age = [16, 17, 18, 18, 60, 19, 20];
const adults = age.filter(isAdult);
console.log(adults);
const child = age.filter(isChild);
console.log(child);
function isAdult(element){
    return element >= 18;
}
function isChild(element){
    return element < 18;
}

const words = ['apple', 'orange', 'kiwi', 'banana', 'pineapple', 'pomegranate', 'coconut'];
const shortWords = words.filter(getShortWords);
console.log(shortWords);
const longWords = words.filter(getLongWords);
console.log(longWords);
function getShortWords(element){
    return element.length <= 6;
}
function getLongWords(element){
     return element.length > 6;
}


/*reduce() : reduce the element of an array to a single value*/
const prices = [5,10,30,15,25,20];
const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);
function sum(previous, next){
    return previous + next;
}

const grades = [75, 50, 90, 65, 95, 70];
const maximum = grades.reduce(getMax);
console.log(maximum);
const minimum = grades.reduce(getMin);
console.log(minimum);
function getMax(previous, next){
    return Math.max(previous, next);
}
function getMin(previous, next){
    return Math.min(previous, next);
}


/*function declaration : Define a reusable block of code that performs
a specific task 
function hello(){
    console.log("Hello!");
}*/
function hello(){
    console.log("Hello!");
}

/* function expression : A way to define function as values or variables */

setTimeout(function(){
    console.log("Hello!");
}, 3000);

const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function (element){
    return Math.pow(element,2);
});
console.log(squares);

const cubes = numbers.map(function (element){
    return Math.pow(element,3);
})
console.log(cubes);

const evenNumbers = numbers.filter(function (element){
    return element % 2 === 0;
})
console.log(evenNumbers);

const oddNumbers = numbers.filter(function (element){
    return element % 2 !== 0;
})
console.log(oddNumbers);

const total = numbers.reduce(function (accumulator,element){
    return accumulator + element;
})
console.log(total);


/*arrow function: A concise way to write function expression good for
simple function that you use only once
(parameter) => some code */
hello();
function hello(){
    console.log("Hello");
}

const hey = function(){
    console.log("Hey!");
}
hey();

const bonjour = (name,age) => {
    console.log(`Bonjour, ${name}!!`);
    console.log(`You're ${age} years old!`);
}
bonjour("John","20");

setTimeout( () => console.log("Hi"), 5000);

const numberss = [1,2,3,4,5,6];
const square = numberss.map((elements) => Math.pow(elements,2));
console.log(square);
const cube = numberss.map((elements) => Math.pow(elements,3));
console.log(cube);
const even = numberss.filter((elements) => elements % 2 === 0);
console.log(even);
const odd = numberss.filter((elements) => elements % 2 !== 0);
console.log(odd);
const tol = numberss.reduce((accumulator,elements) => accumulator + elements);
console.log(tol);


/*object: A collection of related properties and/or methods can represent real
world objects (people, product, places)
object = {key : value, function()}*/
const person1 = {
    firstname : "Spongebob",
    lastname : "Squarepants",
    age : 30,
    isEmployed : true,
    sayHello : function(){console.log("Hi, I'm Spongebob!")},
    eat : function(){console.log("I'm eating a Krabby Patty")},
}
const person2 = {
    firstname : "Patrick",
    lastname : "Star",
    age : 42,
    isEmployed : false,
    sayHello : () => console.log("Hey, I'm Patrick..."),
    eat : () => console.log("I'm eating chicken & pizza"),
}
console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();


/* this : reference to there object where THIS is used (the object depends on 
the immediate context)
person.name = this.name
*/
const person = {
    name : "Spongebob",
    favfood : 'Hamburgers',
    sayHello : function(){console.log(`Hi, I'm ! ${this.name}`)},
    eat : function(){console.log(`${this.name} is eating ${this.favfood}`)},
}
const person2 = {
    name : "Patrick",
    favfood : 'Pizza',
    sayHello : function(){console.log(`Hi, I'm ! ${this.name}`)},
    eat : function(){console.log(`${this.name} is eating ${this.favfood}`)},
    // eat : () => console.log(`${this.name} is eating ${this.favfood}`),
    // this doesn't work with arrow function, it makes reference with window object
}
person.sayHello();
person.eat();
person2.eat();

// console.log(this);


/*constructor : Special method for defining the properties and methods 
of objects*/
function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){
        console.log(`Yor drive ${this.model}`)
    }
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
console.log("Car 1 Properties:")
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

const car2 = new Car("Chevrolet", "Canaro", 2025, "blue");
console.log("Car 2 Properties:")
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

const car3 = new Car("Dodge", "Charger", 2026, "Silver");
console.log("Car 3 Properties:")
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car2.drive();


/*classes : (ES6 feature) provides a more structured and cleaner way to
work with object, compared to traditional constructor functions.
ex. - static keyword, encapsulation, inheritance*/
class Products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product name : ${this.name}`);
        console.log(`Price : $${this.price.toFixed(2)}`);
    }
    calculateTotal(salestax){
        return this.price + this.price*salestax;
    }
}
const salestax = 0.05;
const product1 = new Products("Shirt",19.99);
const product2 = new Products("Pants", 22.50);
const product3 = new Products("Scarf", 10.25)
product1.displayProduct();
const total1 = product1.calculateTotal(salestax);
console.log(`Total Price (with tax): $${total1}`);
product2.displayProduct();
const total2 = product2.calculateTotal(salestax);
console.log(`Total Price (with tax): $${total2}`);
product3.displayProduct();
const total3 = product3.calculateTotal(salestax);
console.log(`Total Price (with tax): $${total3}`);


/*Static : keyword that defines properties or methods that belong to
a class itself rather than the objects created from that class
(class owns anything static, not the object)*/
class MathUtil{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

class Users{
    static userCount = 0;
    constructor(username){
        this.username = username;
        Users.userCount += 1;
    }
    static getUserCount(){
        console.log(`There are ${this.userCount} active users`);
    }
    sayHello(){
        console.log(`Hello, My username is ${this.username}`)
    }
}
const user1 = new Users("Spongebob");
console.log(user1.username);
console.log(Users.userCount);
user1.sayHello();
const user2 = new Users("Patrick");
console.log(user2.username);
console.log(Users.userCount);
user2.sayHello();
const user3 = new Users("Sandy");
console.log(user3.username);
console.log(Users.userCount);
user3.sayHello();

Users.getUserCount();


/*inheritance : allows a new class to inherit properties and 
methods from an existing class (parent -> child) helps with 
code reusability
DRY principle : Don't Repeat Yourself*/
class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "hawk";
    fly(){
        console.log(`${this.name} is flying`);
    }
}
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
rabbit.alive = false;
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
fish.eat();
hawk.sleep();
rabbit.run();
fish.sleep();
hawk.fly();


/*super : keyword is used in classes to call the constructor
or access the properties of the parent (super classs) */
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed} mph`)
    }
}
class Rabbit extends Animal{
    constructor(name, age, runspeed){
        super(name,age);
        this.runspeed = runspeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runspeed);
    }
}
class Fish extends Animal{
    constructor(name, age, swimspeed){
        super(name,age);
        this.swimspeed = swimspeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimspeed);
    }
}
class Hawk extends Animal{
    constructor(name, age, flyspeed){
        super(name,age);
        this.flyspeed = flyspeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flyspeed);
    }
}
const rabbit = new Rabbit("Rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("Hawk", 3, 15);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimspeed);
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flyspeed);
rabbit.run();
fish.swim();
hawk.fly();


/*Getter : Special method that makes a property reusable
Setter : Special method that makes a property writeable
Validate and modify a value when reading / writing */
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }
    get width(){
        return `${this._width.toFixed(1)} cm`;
    }
    get height(){
        return `${this._height.toFixed(1)} cm`;
    }
    get area(){
        return `${(this._width * this._height).toFixed(1)} cm²`;
    }
}
const rectangle = new Rectangle(3, 4);
rectangle.width = 5;
// rectangle.height = -8;
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    set firstname(newFirstname){
        if(typeof newFirstname === 'string' && newFirstname.length > 0){
            this._firstname = newFirstname;
        }
        else{
            console.error(`First name must be a non empty string`);
        }
    }
    set lastname(newLastname){
        if(typeof newLastname === 'string' && newLastname.length > 0){
            this._lastname = newLastname;
        }
        else{
            console.error(`Last name must be a non empty string`);
        }
    }
    set age(newAge){
        if(typeof newAge === 'number' && newAge > 0){
            this._age = newAge;
        }
        else{
            console.error(`Age must be a number`);
        }
    }
    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname;
    }
    get fullname(){
        return this._firstname + " " + this._lastname;
    }
    get age(){
        return this._age;
    }
}
const person1 = new Person("Spongebob", "Squarepants", 50);

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.fullname);
console.log(person1.age);


/*Destructuring : Extract values from arrays and objects, then assign them 
to variables in a convinent way
[] - to perform array destructuring
{} - to perform object destructuring*/
//Example 1 - Swap the values of two variables
let a = 1;
let b = 2;

[a,b] = [b,a]

console.log(a);
console.log(b);
// We can use destructuring to swap values

// Example 2 - Elements in an array
const colors = ["red","green","blue","black","yellow"];
[colors[0], colors[4]] = [colors[4],colors[0]];
console.log(colors);

// Example 3 - Assign array elements to variables
const [firstColor, secondColor, thirdColor, ...extraColors] = colors; //... rest parameter
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// Example 4 - Extract values from objects
const man1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 38,
    job: "Fry Cook",
}

const man2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job="unemployed"} = man1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// Example 5 - Destructure in function parameter
function displayMan({firstName, lastName, age, job="Unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}
displayMan(man1);
displayMan(man2);


/* Nested Objects : Object inside objects
Allows to represent more complex data structures 
Child object is enclosed by a parent object

Person{Address{}, contactInfo{}}
ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}*/

const person = {
    fullName: "Spongebob Squarepants",
    age:30,
    isStudent: true,
    hobbies: ["Karate", "Jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "pepper",
        country: "Int. Water"
    }
}
console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.country);
for(const property in person.address){
    console.log(person.address[property])
}

class Per{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const per1 = new Per("Spongebob", 38, "124 Counch St.", 
                                        "Pepper", 
                                        "Int. Water")
const per2 = new Per("Patrick", 32, "128 Counch St.", 
                                        "Pepper", 
                                        "Int. Water")
const per3 = new Per("Squidward", 45, "126 Counch St.", 
                                        "Pepper", 
                                        "Int. Water")
console.log(per1.name);
console.log(per2.age);
console.log(per3.address);


// Array of Objects
const fruits = [{name: "apple", color:"red", calories: 95}, 
                {name: "orange", color:"orange", calories: 45},
                {name: "banana", color:"yellow", calories: 105},
                {name: "coconut", color:"white", calories: 159},
                {name: "pineapple", color:"yellow", calories: 37}];
console.log(fruits[0].name);
console.log(fruits[2].color);
fruits.push({name: "grapes", color:"green", calories: 62});
fruits.pop();
console.log(fruits);
// foreach
fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.calories));
// map
const fruitName = fruits.map(fruit => fruit.name);
console.log(fruitName);
const fruitColor = fruits.map(fruit => fruit.color);
console.log(fruitColor);
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);
// filter
const yellowFruit = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruit);
const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalFruit);
const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);
console.log(highCalFruit);
// reduce
const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ? 
                                fruit : max);
console.log(maxFruit);
const minFruit = fruits.reduce((min, fruit) => 
                                fruit.calories < min.calories ? 
                                fruit : min);
console.log(minFruit);


/*sort() - Method used to sort elements of an array in place.
Sorts elements as strings in lexicographic order, not alphabetical 
lexicographic = (alphabet + numbers + symbols) as strings*/
let Fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
Fruits.sort();
console.log(Fruits);
let nums = [23, 46, 9, 81, 44, 12, 4];
nums.sort();
console.log(nums); // lexicographic sorting
nums.sort((a, b) => a - b);
console.log(nums);

const peoples = [{name : "Spongebob", age : 38, gpa : 3.0}, 
                {name : "Henry", age : 15, gpa : 1.5}, 
                {name : "Patrick", age : 32, gpa : 4.0}, 
                {name : "Petter", age : 12, gpa : 4.8}]
peoples.sort((a, b) => b.name - a.name);
console.log(peoples);
// reverse
peoples.sort((a, b) => b.name.localeCompare(a.name));
console.log(peoples);


// Shuffle elements of an array
const cards = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
// cards.sort(() => Math.random() - 0.5);
shuffle(cards);
console.log(cards);
function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}


// Date Object - Objects that contain values that represent dates and
// times. These date objects can be changed and formated
// Date(year, month, day, hour, minute, second, ms)
const date = new Date();
// const date = new Date("2024-01-02T12:00:00Z");
// const date = new Date(0);
// 0 means Jan, 1 means feb, and so on..
console.log(date);
const year = date.getFullYear();
console.log(year);
const month = date.getMonth();
console.log(month);
const day = date.getDate();
console.log(day);
const hours = date.getHours();
console.log(hours);
const min = date.getMinutes();
console.log(min);
const sec = date.getSeconds();
console.log(sec);
const ms = date.getMilliseconds();
console.log(ms);
const dayOfWeek = date.getDay();
console.log(dayOfWeek);

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);
console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");
if (date2 > date1) {
    console.log("Happy New Year!")
}


/*Closure - A function defined inside of another function, the inner 
function has access to the variables and scope of the outer function.
Allow for private variables and state maintenance used frequently in JS
frameworks : React, Vue, Angular */
function outer(){
    let message = "Hello";
    function inner(){
        console.log(message);
    }
    inner();
}
outer();

function createCounter(){
    let count = 0;
    function increment(){
        // let count = 0;
        count++;
        console.log(`Count increased to ${count}`);
    }
    function getCount(){
        return count;
    }
    return {increment, getCount};
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getCount()}`);
// counter.count = 0;
// console.log(count);
// console.log(counter.count);

// Example 2
function createGame(){
    let score = 0;
    function increaseScore(points){
        score += points;
        console.log(`+${points} pts`);
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points} pts`);
    }
    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}
const game = createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()} pts`);


/*setTimeout() - Function in Javascript that allows you to schedule the
execution of a function after an amount of time (milliseconds)
Times are approximate (varies based on the workload of the javascript
runtime env.)
setTimeout(callback, delay)
clearTimeout(timeoutId) = can cancel a timeout before it triggers*/
function sayHello(){
    window.alert("Hello");
}
setTimeout(sayHello, 3000);

setTimeout(function () {
    window.alert("Goodbye");
}, 5000);

const timeoutId = setInterval(()=> window.alert("How are you?"), 9000);
// clearTimeout(timeoutId);
function startTimer(){
    setTimeout(() => window.alert("Hey"), 1000);
    console.log("STARTED");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}


/*ES6 Module - An External file that contains reusable code that 
can be imported into other Javascript files.
Write reusable code for many different apps.
Can contain variables, classes, functions ... and more
Introduced as a part of ECMAScript 2015 update*/
import {Pi, getCircumference, getArea, getVolume} from './mathUtil.js';
console.log(Pi);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);
console.log(`Circumference : ${circumference.toFixed(2)}cm`);
console.log(`Area : ${area.toFixed(2)}cm²`);
console.log(`Volume : ${volume.toFixed(2)}cm³`);


/*Synchronous - Executes line by line consecutively in a sequential manner.
Code that waits for an operation to complete.

Asynchronous - Allows multiple operations to be performed concurrently
without waiting.
Doesn't block the execution flow and allows the program to continue
(I/O operations, network requests, fetching data)
Handled with : Callbacks, Promises, Async/Await*/
// Synchronous
console.log("Task 1.1");
console.log("Task 1.2");
console.log("Task 1.3");

// Asynchronous function
// Callback
function func1(callback){
    setTimeout(()=>{console.log("Task 1");
        callback()}, 3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);


/*Error - An object that is created to represent a problem that occurs
Occur often with the user input or establishing a connection*/
console.log("Hi");
console.log("You have reached the end!");
// console.log(x);  Uncaught ReferenceError
/*try {} = Encloses code that  might potentially cause an error
catch {} = Catch and handle any thrown Errors from try { }
finally {} = (optional) Always executes. Used mostly for clean up
ex. close files, close connections, release resources*/
// Example 1
try{
    console.log("Hey!")
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch(error){
    console.error(error);
}
finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes")
}
console.log("You have reached the end!");

// Example 2
try{
    const dividend = Number(window.prompt("Enter a dividend : "));
    const divisor = Number(window.prompt("Enter a divisor : "));

    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
console.log("END!");


/*DOM - Document Object Model
Object{} that represents the page you see in the web browser and 
provides you with an API to interact with it. 
Web browser constructs the DOM when it loads an HTML document, 
and structures all the elements in the tree-like representation. 
Javascript can access the DOM to dynamically change the content, 
structure, and style of a web page.*/
document.title = "My Website";
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
const user = "";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += user === "" ? ` Guest` : username
console.dir(document);
// console.log(document);


/*Element Selectors = Methods used to target and manipulate HTML 
elements. They allow you to select one or multiple HTML elements 
from the DOM (Document Object Model)
1. document.getElementById()    // ELEMENT OR NULL
2. document.getElementsClassName()  // HTML COLLECTION
3. document.getElementsByTagName()  // HTML COLLECTION
4. document.querySelector()  // ELEMENT OR NULL
5. document.querySelectorAll()  // NODELIST  */
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);
// fruits[0].style.backgroundColor = "yellow";
// fruits[1].style.backgroundColor = "orange";
for(let fruit of fruits){
    fruit.style.backgroundColor = "skyblue";
}
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "pink";
});

const h4Elements = document.getElementsByTagName("h4");
const listItems = document.getElementsByTagName("li");
// console.log(h4Elements);
h4Elements[0].style.backgroundColor = "orange";
h4Elements[1].style.backgroundColor = "lightgreen";
// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "orange";
// }
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "skyblue";
});
for(let li of listItems){
    li.style.backgroundColor = "lightgreen";
}

const element = document.querySelector(".fruits");
element.style.backgroundColor = "purple";
// first match is selected
const food = document.querySelectorAll("li");
food[4].style.backgroundColor = "hotpink";
console.log(food);
food.forEach(fd => {
    fd.style.color = "darkblue";
});


/*  DOM Navigation : The process of navigating through the structure 
of an HTML document using JavaScript.
.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children   */
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
// console.log(firstChild);
firstChild.style.backgroundColor = "yellow";
const vegetables = document.getElementById("vegetables");
const lastElement = vegetables.lastElementChild;
lastElement.style.backgroundColor = "darkorange";
const desserts = document.getElementById("desserts");

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElements => {
    const FirstChild = ulElements.firstElementChild;
    FirstChild.style.backgroundColor = "skyblue";
    const LastElement = ulElements.lastElementChild;
    LastElement.style.backgroundColor = "lightgreen";
});

const ele = document.getElementById("potato");
const sibling = ele.nextElementSibling;
sibling.style.backgroundColor = "pink";
const nxtSibling = ele.nextElementSibling;
nxtSibling.style.backgroundColor = "blue";
const prevSibling = ele.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";
const parent = ele.parentElement;
parent.style.backgroundColor = "brown";

const elements = document.getElementById("vegetables");
const nextSiblings = elements.nextElementSibling;
nextSiblings.style.backgroundColor = "orange";
const previousSiblings = elements.previousElementSibling;
previousSiblings.style.backgroundColor = "crimson";
const children = elements.children;
// console.log(children);
Array.from(children).forEach(child => {
    child.style.backgroundColor = "lightblue";
});
// children[1].style.backgroundColor = "blue";
