// Task 3

const myString = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";

// Count amount of strings

function numberOfSpaces(myString)
{
    const number = myString.split(" ").length - 1;
    return number;
}
console.log("Number of spaces in the string: " + numberOfSpaces(myString));

// Change the first symbol of the line into upper register

function upperRegister(myString)
{
    return myString.charAt(0).toUpperCase() + myString.slice(1);
}

console.log("First symbol capitalized: " + upperRegister(myString));

// Count the words amount

function getNumberOfWords(myString)
{
    const wordsArray = myString.split(/\s+/);
    const numberOfWords = wordsArray.length;
    return numberOfWords;
}

console.log("Number of words in the string: " + getNumberOfWords (string));


// Check if the word is palindrome

function isPalindrome(string)
{
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

if (isPalindrome(myString)) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}


// Make an abbreviation

function createAbbreviation(myString) {

    const wordsArray = myString.split(' ');

    const abbreviation = wordsArray.map(word => word[0].toUpperCase()).join('');

    return abbreviation;
}

const abbreviation = createAbbreviation(myString);
console.log("Abbreviation from string: " + abbreviation);