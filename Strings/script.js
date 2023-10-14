// Task 1

let clock = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    getTimeString: function() {
        var formattedHours = this.hours < 10 ? '0' + this.hours : this.hours;
        var formattedMinutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        var formattedSeconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
        return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
    },
    addSecond: function(hours, minutes, seconds) {
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours++;
                if (this.hours >= 24) {
                    this.hours = 0;
                }
            }
        }
    },
    removeSecond: function(hours, minutes, seconds) {
        this.seconds--;
        if (this.seconds < 0) {
            this.seconds = 59;
            this.minutes--;
            if (this.minutes < 0) {
                this.minutes = 59;
                this.hours--;
                if (this.hours < 0) {
                    this.hours = 23;
                }
            }
        }
    },
    displayCurrentTime: function() {
        document.write("Current Time: " + this.hours + ":" + this.minutes + ":" + this.seconds + ".");
    }
};

clock.getTimeString();
clock.addSecond(6, 59, 59);
clock.removeSecond(12, 30, 10);
clock.displayCurrentTime();


// Task 2

let car = {
    model: "X",
    manufacturer: "Motorola",
    averageSpeed: 100,
    year: 2018,
    showInfo: function ()
    {
        console.log("Car info:" + this.model + "\n" + this.manufacturer + "\n" + this.averageSpeed + "km/h\n" + this.year + ".");
    },
    calculateTravelTime : function (distance)
    {
        var totalTravelTime = distance / averageSpeed;
    
        var numberOfBreaks = Math.floor(totalTravelTime / 4);
    
        var totalBreakTime = numberOfBreaks;
    
        var totalTimeWithBreaks = totalTravelTime + totalBreakTime;
    
        return totalTimeWithBreaks;
    }
};

car.showInfo();
car.calculateTravelTime(400);


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