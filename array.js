//--------------------------------SECTION 1: ARRAY BASICS----------------------------

//Question 1: Array Access and Length
 const fruits = ["mango","Banana","Apple","orange","papaya"];
 
 console.log( "Second fruit:",fruits[1]);

 console.log("last fruit:",fruits[4]);

 console.log( "array Length:",fruits.length);

 fruits[2] = "cherry";
 console.log("Updated fruits:",fruits) ;


//Question 2: Understanding Array References
 let arr1 = [10, 20, 30, 40];

 //part-1

 let arr2 = arr1;

 arr2[1] = 99;

 console.log("Arr1",arr1);
 console.log( "Arr2", arr2);


 // Explanation:
// arr1 and arr2 point to the same array in memory.
// Changing arr2 also changes arr1.


//part-2

let arr3 = arr1.slice();

arr3[3] = 88;

console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("arr3:", arr3);


// Explanation:
// slice creates a shallow copy.
// Changes in arr3 do not affect arr1 or arr2.


//-------------------------------------SECTION 2: ARRAY METHODS--------------------------------------



//Question 1: Basic Array Methods

let num = [12, 15, 20, 25, 30];

//a) Use the push() method to add a number to the array.
num.push(56);
console.log( "After push:",num);

// b) Use the pop() method to remove the last number from the array.
num.pop();
console.log( "After pop:",num);

//c) Use indexOf() to find the position of 20 and print it.

console.log("Index of 20:",num.indexOf(20));


//Question 2: Working with Array Methods
//Extract Middle Three Colors


let colors = ["red", "blue", "green", "yellow", "purple", "black"];

let newArr = colors.slice(2,5);
console.log("Extract the middle three colors :",newArr);

// Explanation:
// slice creates a new array and does not modify original array.


//Question 3: Insert and Remove Elements

let items = ["pen", "pencil", "eraser", "scale", "sharpener"];

console.log("remove items:",items.splice(2,2,"marker","ruler"));
console.log(items);

//---------------------------------------SECTION 3: ADVANCED ARRAY OPERATIONS---------------------------------------------

//Question 1: Replace Values in an Array

let scores = [12, 25, 37, 48, 59, 63, 77];

// Replace last three values with 0

scores.splice(4, 3, 0, 0, 0);

console.log(scores);


// Overwrite entire array

scores.fill("N/A");

console.log(scores);


//Question 2: Filtering Data from Arrays


let number = [11, 22, 35, 42, 59, 60, 73, 88];

//Numbers greater than or equal to 50
const greater = number.filter((number) => number >= 50);
console.log("greater than or equal to 50:",greater);

//// Function to check even number

function isEven(number) {
    return number % 2 === 0;
}


let evenNumbers = number.filter(isEven);

console.log("Even numbers:", evenNumbers);



//Question 3: Looping Through Nested Arrays
//Loop through the following nested array using a for loop and print each value:

let cube = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]];



for (let i = 0; i < cube.length; i++) {

    for (let j = 0; j < cube[i].length; j++) {

        for (let k = 0; k < cube[i][j].length; k++) {

            console.log(cube[i][j][k]);

        }

    }
}
