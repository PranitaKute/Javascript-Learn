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

/*et age;
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
*/

/*let fullName = "Caleb Curry";
let age = 25;
let address = "USA";

document.getElementById("p1").textContent = `Your Name id ${fullName}!`;
document.getElementById("p2").textContent = `You are ${age} years old.`;
document.getElementById("p3").textContent = `You live in ${address}.`;
*/


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
/*let age = window.prompt("How old are you?");
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
*/

//Constants: A variable can't be changed once you assign them
/*const PI = 3.14159;    //
let radius;
let circumference;

document.getElementById("submit").onclick = function(){
radius = document.getElementById("input").value;
radius = Number(radius);
circumference = 2 * PI * radius;
document.getElementById("ans").textContent = `Circumference is : ${circumference}`+"cm";
}
*/


//Math: Built-in object that provides a collection of properties & methods
//console.log(Math.PI);
//console.log(Math.E);    //Eulers number
/*
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
console.log(min);   */


//If Statement: If a condition is true, execute the same code. If not, do something else
/*let age = 14;
if(age >= 18){
    console.log("You are old enough to enter this site!");
}
else{
    console.log("You must be 18+ to enter this site!");
}   */

/* let isStudent = false;
if(isStudent){
    console.log(`You are a Student!`);
}
else{
    console.log("You are NOT a Student!");
}   */


//checked: property that determines the checked state of html checkbox or radio button element
/*
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
*/


/*
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
*/


//Switch: It is an efficient replacement to many else if statements
/*let day = 3;
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
*/


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




/*
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
}   */
