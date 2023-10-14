//Task 1

let testArray = new Array(20);
for (let i = 0; i < testArray.length; i++)
{
    testArray[i] = Math.floor(Math.random() * 100);
}

console.log(testArray);


// Task 2

for (let i = 0; i < testArray.length; i++)
{
    console.log(`[${i+1}] - ${testArray[i]}`);
}


// Task 3

if (testArray.includes(7))
{
    console.log("Array has 7!");
}
else {
    console.log("This array doesn't have 7!");
}


// Task 4

testArray.sort(function(a, b)
{
    return b - a;
});

console.log("Sorted array: " + testArray);


// Task 5

var startPoint = Math.ceil(testArray.length / 2);

testArray.splice(startPoint, testArray.length - startIndex, ...Array(testArray.length - startPoint).fill(0));

console.log("Replaced with zeros array: " + testArray);


// Task 6

testArray.splice(0, 3);

console.log("Deleted first 3 numbers: " + testArray);


// Task 7

counter = 0;
for (let i = 0; i < testArray.length; i++)
{
    for (let j = i + 1; j < testArray.length; j++)
    {
        if (testArray[i] == array1[j])
        {
            counter++;
        }
    }
}

if (counter > 0) {
    console.log("This array has duplicates.");
}
else {
    console.log("This array doesn't have duplicates.");
}


// Task 8

var splitPoint = Math.ceil(testArray.length / 2);

let secondTestArray = testArray.slice(0, startPoint);

console.log("New array: " + newArray);


// Task 9

var evenCount = 0;

for (var i = 0; i < testArray.length; i++)
{
    if (testArray[i] % 2 === 0)
    {
        evenCount++;
    }
}

console.log("Number of even values in the array: " + evenCount);
