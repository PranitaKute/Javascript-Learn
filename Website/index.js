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
