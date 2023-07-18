// Task 1 - a

let currentYear = new Date().getFullYear;
let birthYear = +prompt("Enter your birth year: ");

console.log(`You are ${currentYear - birthYear} years old.`);


// Task 1 - b

const fileSize = 820;

let gigabytes = +prompt("Enter the space in gigabytes: ");
let gigaToMega = gigabytes * 100;

console.log(`Amount of files you can download: ${Math.round(gigaToMega) / fileSize}.`);


// Task 2 - a

let numberChoice = +prompt("Enter any nymber from 0 to 9 to see a symbol: ");

if(!numberChoice < 0 || numberChoice > 9)
{
    switch(numberChoice)
    {
        case 1:
            console.log("!");
            break;
        case 2:
            console.log("@");
            break;
        case 3:
            console.log("#");
            break;
        case 4:
            console.log("$");
            break;
        case 5:
            console.log("%");
            break;
        case 6:
            console.log("^");
            break;
        case 7:
            console.log("&");
            break;
        case 8:
            console.log("*");
            break;
        case 9:
            console.log("(");
            break;
        default:
            break;
    }
}

// Task 2 - b

let givenYear = +prompt("Enterthe year: ");

