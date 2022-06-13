// console log, logs text in console
// doc logs on the document
console.log("Hello World");
// this creates a variable for random number 0.0-1
let randomNumber = Math.random(); //0.0-1
// if conditions are met then relational operators are to be used
if (randomNumber < 0.50) {
// if its greater than .50 then this block of code shall run
    console.log("Condition was Met");
    console.log(randomNumber);

}

// if statement less then 0.5
if (randomNumber >= 0.5) {
// same as above if the number is less than or equal to 0.5 then block
// of code shall run 
    console.log('Condition Was Met');
    console.log(randomNumber); 
}

// declare variable dayweek which is saturday
// (const allows you to modify the value of the array but the ref to the array cant be changed)
const dayOfWeek = 'Saturday';
// this calls dayofweek variable
if (dayOfWeek === 'Monday'){
    console.log("Yay its Monday!");

} else if (dayOfWeek === 'Friday'){

    console.log("Yay Its Friday");

} else if (dayOfWeek === 'Saturday') {

    console.log("You have the correct Day from the variable"); 
}
// created prompt to show a enter you age that will log a 
// text in console depending on the number entered for the age
const age = prompt("Enter An Age");

if (age < 5) {

    console.log("Hey, you're a baby!");

} else if (age < 10) {

    console.log("Hey, you're just a kid!");
} else if (age < 35) {

    console.log("You're getting older.");
}
// IF ALL OTHER CONDITIONS FAIL - ELSE.
else {

    console.log("You are over the age of 35.");
}
// switch runs code based on different cases
// in this block we created a switch then declared the variable that overall runs a log in the console
const fruit = 'Peach';


switch (fruit) {

    case 'Oranges':
        console.log("Oranges are $0.59 a pound");
        break;
    case 'Bananas':
        console.log("Bananas are $0.10 a pound");
        break;
    case 'Avocados':
        console.log("Advocados are expensive");   
        break; 
    case 'Papayas':
        console.log("Papayas are $0.70 a pound");
        break;
        // if everything fails you run this
    default:
        console.log("Last Resort If All Conditions Fail");

}

// creates a password prompt so you must enter password to get into page
const password = prompt("Enter in a new password");
// if statement with a nested if statement for password length of more then or equal to 6 
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        // this shows up in console as a log if password is valid
        console.log("Valid Password");
    } else {
        // if password fails this log can show on console describing the password error
        console.log("Password Cant Have Spaces");
    }
} else {
    console.log("Password is too short");
}
// here is a function with name singsong. inside parenthesis we can add a parameter
function singSong() {
// this is body of function that will log do re mi 
    console.log("DO");
    console.log("RE");
    console.log("ME");
}
// here we called function singSong
//(a parameter is wahts in paraentheis at the time of declaration)
// (argument is the value with supply to the parameter)
singSong()
singSong()
singSong()
// created function with a parameter
function greet(firstName) {

    console.log(`Hey There, ${firstName}`)
}
// this is the argument to the parameter which in this case is cutie
greet('cutie');

// here is the function with first name and last name parameters.
function greet1(firstName,lastName) {

    console.log(`Hey There, ${firstName} ${lastName}`)
}
// here is another argument that "victor" is going to go into {lastname} area 
// because of the parameters next to the function
greet1('Boomer','Sooner');

// basically you make a parameter in parenthesis 
// then you add a arguement that supplys the value to the actual parameter.
// the arguemnt value is what changed {firstName} to cutie in the console.