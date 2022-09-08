//Example 1.
/** 
 * Add two Numbers together
 * */

function addNumbers (a, b) {
    return a + b;
}

addNumbers();

//Example 2.
/** 
 * Display message to the user
 * */

function greetingUsers(){
    return `<span>Hello my friendly user</span>`;
}

greetingUsers();

//Example 3.

/**
 * Add three numbers together
 * @param {number} a First value
 * @param {number} b Second value
 * @param {number} c Third value
 * */

function addThreeNumbers(a, b, c) {
    return a + b + c;
}

addThreeNumbers(10, 20, 90);

// Example 4. @return

/**
 * Display cats names
 * @param {string} cat1 first value
 * @param {string} cat2 second value
 * @param {string} cat3 third value
 * @param {string} cat4 fourth value
 * @return {string} List of cats names
 * **/

function addFourCats(cat1, cat2, cat3, cat4) {
    return `<ul>
                <li>${cat1}</li>
                <li>${cat2}</li>
                <li>${cat3}</li>
                <li>${cat4}</li>
            </ul>`
}

addFourCats("milo", "andy", "shown", "lira");

// Example 5.

// @example

```js
console.log("hello world");
```

/**
 * Add Four numbers together
 * @param {number} a First value
 * @param {number} b Second value
 * @param {number} c Third value
 * @param {number} d Fourth value
 * @return {number} Sum of numbers
 * @example
 * ```js
 * const a = 20;
 * const b = 80;
 * const c = 1;
 * const d = 9;
 * const sum = addFourNumbers(a, b, c, d);
 * ```
 * // Expect sum to be 110
 * */

 function addFourNumbers(a, b, c, d) {
    return a + b + c + d;
}

addFourNumbers(10, 20, 90, 100);

// Optional Parameters

///**
 //* *@param {dataType} [optionalParamName] optionalParamNameDescription
 //*/

 /**
  * Multiply two numbers together
  * @param {number} a First value
  * @param {number} [b] Second value
  * @return {number} Multiplication of numbers
  * 
  */

function multiplyNumbers(a, b = 10) {
    return a * b;
}
multiplyNumbers();

/**
 * 
 * Adds two numbers 
 * @typeof {(number|string)} NumberLike
 */

function addTwoDigits(a, b) {
    return a + b;
}

addTwoDigits();