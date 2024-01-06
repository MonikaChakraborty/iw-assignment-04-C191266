// Import NPM Package
const underscore = require('underscore');

// Call appropriate function from the NPM package to solve the assignment


const array = ["Java", "Javascript", "Typescript"];


/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "Java"
 */

ifContainsJava = underscore.contains(array, 'Java');


// First Answer 
console.log("The array contains 'Java':", ifContainsJava);


/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "C++"
 */

ifContainsCpp = underscore.contains(array, 'C++');


// Second Answer
console.log("The array contains 'C++':", ifContainsCpp);