/*
console.log();
// 2.
console.clear();
console.warn();
console.error();
console.table();

// 1.

console.log("hello im here");

const name = "Jonas";

console.log(name);

const responseDataOne = [
    {
        name: "jonas",
        age: "22",
    },
    {
        name: "emil",
        age: "29"
    }
];

const responseDataTwo = [
    {
        name: "jonas",
        age: "5",
    },
    {
        name: "emil",
        age: "10"
    }
];

console.log("responseDataOne: ",responseDataOne);
console.log("responseDataTwo: ",responseDataTwo);

console.log(1+2);

const sum = 1+2;

console.log("My " + "name " + "is " + sum + " jonas");

console.log(`my name is jonas ${sum}`)

//console.clear();

//console.table();

console.log(responseDataOne);
console.table(responseDataOne);
*/

console.time(); // This starts the timer
console.timeEnd(); //this ends the timer


function counter(){
    for(let i = 0; i <= 3; i++) {
        console.log(i);
    }
}

console.time("myTimer");
counter();
console.timeEnd("myTimer");

console.time("myTimer");
counter();
console.timeEnd("myTimer");

console.time("myTimer");
counter();
console.timeEnd("myTimer");

console.time("myTimer");
counter();
console.timeEnd("myTimer");


// to the average of these number

average = (2 + 4 + 7) / 3;
console.log(average);


/* 1. 
function sum (num1, num2) {
    return num1 + num2;
}
let number1 = 10;
console.log(number1);
let number2 = 20;
console.log(number2);



let total = sum (number1, number2);

console.log("total: ",total);
*/

// hey could you create a new function witch calculate the average of
// given 3 numbers
//please name this function getAverage()

function getAverage(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

let myAverage = getAverage(2, 4, 5);
console.log("myAverage: ",myAverage);

const myArray = [1, 3, 4, 5];

// create a function witch gets the average of the numbers in this array

function getArrAverage(arr) {
   var total = 0;
   for (let i = 0; i< arr.length; i++) {
    total += arr[i]; 
   } 
   console.log("total",total);
   const numberOfItemsInArr = arr.length;
   console.log("numberOfItemsInArr: ",numberOfItemsInArr);
   return total / numberOfItemsInArr;
}

const resultAverage = getArrAverage(myArray);

console.log("resultAverage: ",resultAverage)

// when you make an API calculate
/*
function getCatFacts() {
    fetch("https://catfact.ninja/fact")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.data);
    }).catch(error => {
     } 
    )   
}
*/
getCatFacts();

function getCatyFacts(){
    const response = await fetch("https://catfact.ninja/fact");
    console.log("response: ",response);
    const catFacts = await response.json();
    console.log(catFacts);
    console.log(catFacts.data);
    return catFacts;

}

getCatyFacts().then(r =>)