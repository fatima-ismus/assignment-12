//define a string
const message = "Welcome to JavaScript ES6";
//covert it to lower case
console.log(message.toLowerCase());
//find the position of the word "JavaScript"
console.log(message.indexOf("JavaScript"));
//Replace "JavaScript" with ES6
console.log(message.replace("JavaScript", "ES6"));

//Given the array const items =["apple", "banana", "cherry"], use the map()function to return a new
//array where each item is capitalized
const items = ["apple", "banana", "cherry"];
const capitalized_items = items.map((item) => item.toUpperCase());
console.log(capitalized_items);

//Write a function greet that takes a name parameter with a default value of "Friend". The function
//should return a greeting message like, "Hello, [name]!"
const greet = (name2) => {
  name2 = "Friend";
  return `Hello, ${name2}!`;
};
console.log(greet());

//Create an array const numbers = [3,6,9,12,15,18,21]. Use an arrow function with the filter() method to
//create a new array with only numbers greater than 10
const numbers = [3, 6, 9, 12, 15, 18, 21];
const greater_than_10 = numbers.filter((number) => number > 10);
console.log(greater_than_10);

/**Given an array of objects products = [{id:1, name:"Laptop"},{id:2,name:"Phone"}, {id:3,name:"Tablet"}]
 * write code to find the product with the name "Phone" using the find() method
 * Get the index of the product with id equal to 3 using findIndex()
 */
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
];
const foundPhone = products.find((product) => product.name === "Phone");
console.log(foundPhone);
const id3 = products.findIndex((product) => product.id === 3);
console.log(id3);

/** Define const name="JavaScript". Write a code snippet that uses template literals to generate the
 *following message: "The length of the word 'JavaScript' is 10 characters"
 */
const name3 = "JavaScript";
const message3 = `The length of the word '${name3}' is ${name3.length} characters`;
console.log(message3);
/**Create two arrays const arr1=[1,2,3] ans const arr2=[4,5,6]. Use the spread operator to merge them
 * into a single array and log the result
 */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArrs = [...arr1, ...arr2];
console.log(mergedArrs);
/**Given an array of numbers const ages=[21,18,45,30], write code to check if all ages are greater than
 * or equal to 18 using every(). Check if any age is below 20 using some()
 */
const ages = [21, 18, 45, 30];
// to check if all ages are greater than or equal to 18
const allAges = ages.every((age) => age >= 18);
console.log(allAges); // true
// to check if any age is below 20
const anyAge = ages.some((age) => age < 20);
console.log(anyAge);
/**Create an array const scores =[10,15,20,25]. Write a function using the reduce() method to calculate the
 * total scores
 */
const scores = [10, 15, 20, 25];
const totalScore = scores.reduce((acc, currentScore) => acc + currentScore, 0);
console.log(totalScore);
/** */
