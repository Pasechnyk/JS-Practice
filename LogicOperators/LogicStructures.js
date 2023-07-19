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

let newDay = 0, newMonth = 0, newYear = 0;

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
        if ((setYear % 4 == 0 && setYear % 100 != 0 || setYear % 400 == 0) && setDay == 29)
        {
            newDay = 1;
            newMonth = setMonth + 1;
            newYear = setYear;
        }
        else if (setDay == 28)
        {
            newDay = 1;
            newMonth = setMonth + 1;
            newYear = setYear;
        }
        else
        {
            newDay = setDay + 1;
            newMonth = setMonth + 1;
            newYear = setYear;
        }
    }
    else 
    {
        if (setDay == 31)
        {
            if (setMonth == 12)
            {
                newDay = 1;
                newMonth = 1;
                newYear = setYear + 1;
            }
            else 
            {
                newDay = 1;
                newMonth = setMonth + 1;
                newYear = setYear;
            }
        }
        else 
        {
            newDay = setDay + 1;
            newMonth = setMonth;
            newYear = setYear;
        }
    }
}

console.log(`Next date is: ${newDay}.${newMonth}.${newYear}.`);


// Task 3 - a

let firstNumber = +prompt("Enter the first number of the range: ");
let lastNumber = +prompt("Enter the last number of the range: ");

let sum = 0;

if (!lastNumber <= firstNumber)
{
    for(i = firstNumber; i <= lastNumber; i++)
    {
        sum += i;
    }
}

console.log(`The sum is: ${sum}.`);


// Task 3 - b

let randomNumber = +prompt("Enter the number: ");

console.log(`Amount of digits:${randomNumber.toString().length}`);


// Task 3 - c

let positiveNumber = 0, zero = 0, negativeNumber = 0, evenNumber = 0, oddNumber = 0;

for (i = 0; i < 10; i++)
{
    let givenNumber = +prompt("Enter 10 random numbers: ");

    if (givenNumber > 0)
    {
        positiveNumber++;
    }
    else if (givenNumber < 0)
    {
        negativeNumber++;
    }
    else if (givenNumber = 0)
    {
        zero++;
    }

    if (givenNumber % 2)
    {
        evenNumber++;
    }
    else { oddNumber++; }
}

console.log(`Statistics: Positive - ${positiveNumber}, Nulls - ${zero}, Negative - ${negativeNumber}, Even - ${evenNumber}, Odd - ${oddNumber}.`);


// Task 3 - d

let accept = true;
let day = 1;

do 
{
    switch (day)
    {
        case 1:
            accept = confirm("It's Monday. Do you want to see the next day?")
            break;
        case 2:
            accept = confirm("It's Tuesday. Do you want to see the next day?")
            break;
        case 3:
            accept = confirm("It's Wednesday. Do you want to see the next day?")
            break;
        case 4:
            accept = confirm("It's Thursday. Do you want to see the next day?")
            break;
        case 5:
            accept = confirm("It's Friday. Do you want to see the next day?")
            break;
        case 6:
            accept = confirm("It's Saturday. Do you want to see the next day?")
            break;
        case 7:
            accept = confirm("It's Sunday. Do you want to see the next day?")
            break;
    }
}
while (accept = true);

