// Draft (in progress)
// Task 1 - a

let date = new Date();
let currentYear = date.getFullYear();

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

let givenYear = +prompt("Enter the year: ");

if ((givenYear % 4 == 0) && (givenYear % 100 != 0) || (givenYear % 400 == 0) ? console.log(`${givenYear} is a leap year!`) : console.log(`${givenYear} is not a leap year!`));


// Task 2 - c

let setDay = +prompt("Enter the day: ");
let setMonth = +prompt("Enter the month: ");
let setYear = +prompt("Enter the year: ");

let newDay, newMonth, newYear;

if((setDay >= 1 && setDay <= 31) && (setMonth >= 1 && setMonth <= 12) && (setYear != 0))
{
    if(setMonth == 4 || setMonth == 6 || setMonth == 9 || setMonth == 11)
    {
        if (setDay == 30)
        {
            newDay = 1;
            newMonth = setMonth + 1;
            newYear = setYear;
        }
        else
        {
            newDay  = setDay + 1;
            newMonth = setMonth;
            newYear = setYear;
        }
    }
    else if (setMonth == 2)
    {
        if ()
    }
}
