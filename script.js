// 1. Concating words together such as first name, last name
let coffee = "French";
let flavor = "Vanilla";
let order = coffee.concat(flavor);
console.log(order);

// 2. Templating where we insert variables into a string to create a dynamic string Write the proper syntax to have the console.log method show the the following using templating:
let coffee = 3;
let chai = 10;
console.log(`I have ${coffee} coffees`);
console.log(`I also have ${chai} chais`);
console.log(`I have a total of (${coffee}+${chai}) drinks total`);

// 3. Searching the String on content! indexOf String Method: Find where 42 occurs
function myFunction(){
    let str="Can you guess what is the index of 42 is? I am sure you will be surprised!";
    let answer = str.indexOf("42") ;
    console.log(answer)
}
// length method: Find how long string is
function myFunction(){
    let str= "Can you guess how long this string is? I am sure you will be surprised!(Hint:it is not 42.)";
    let answer= str.length;
    console.log(answer);
}
// Replacing Values in a string

function myFunction(){
    let str1="How you doin?";
    let str2= str1.replace("doin", "goin");
    console.log(str2)
}
//  Using Trim method for strings

function myFunction(){
    var str = "   SOCIAL DISTANCING!!!"
    alert( str.trim());
};

// Making Strings Uppercase

function myFunction(){
    let str="social distancing!!";
    let res= str.toUpperCase;
    console.log(res);
}
// Making Strings Lowercase

function myFunction(){
    let str = "QuiEt VoICeS...PLEASE";
    let res= str.toLowerCase;
    console.log(res)
}