
function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null;  // Handle case for an empty array
    }
    let largest = arr[0];  // Initialize with the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

const numbers = [3, 5, 7, 2, 8];
const largest = findLargestNumber(numbers);
console.log("The largest number is: " + largest);


// Create a function that takes an array of numbers and returns a new array with each number doubled.
// Function to double the numbers in an array
function doubleNumbers(arr) {
    return arr.map(function(num) {
        return num * 2;
    });
}

// Example usage
const number = [1, 2, 3, 4, 5];  // Input array
const doubled = doubleNumbers(number);  // Call the function to double the numbers
console.log("Original array: " + number);
console.log("Doubled array: " + doubled);


// Write a function that takes an array of strings (names of cities) and returns them sorted in alphabetical order.

// Function to sort an array of city names
function sortCities(cities) {
    return cities.sort();
}

// Example usage
const cityNames = ["Lagos", "Abuja", "Ibadan", "Kano", "Port Harcourt"];
const sortedCities = sortCities(cityNames);  // Call the function to sort the cities
console.log("Original array of cities: " + cityNames);
console.log("Sorted array of cities: " + sortedCities);


// Create an object representing a user (with name, age, and email). Write a function that prints all the keys of the object.


// Object representing a user
const user = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
};

// Function to print all keys of the object
function printObjectKeys(obj) {
    const keys = Object.keys(obj);  // Get an array of keys
    keys.forEach(function(key) {
        console.log(key);  // Print each key
    });
}

// Example usage
printObjectKeys(user);



// Write a function that merges two arrays of numbers and sorts the combined array in ascending order.


// Function to merge and sort two arrays of numbers
function mergeAndSort(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);  // Merge the two arrays
    return mergedArray.sort(function(a, b) {
        return a - b;  // Sort the combined array in ascending order
    });
}

// Example usage
const array1 = [5, 8, 2];
const array2 = [3, 9, 1];
const sortedMergedArray = mergeAndSort(array1, array2);
console.log("Merged and sorted array:", sortedMergedArray);

// Create an array of book objects (each with title, author, and genre). Write a function that takes a genre as an argument and returns an array of books that match that genre.


// Array of book objects
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { title: "1984", author: "George Orwell", genre: "Dystopian" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
    { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" }
];

// Function to return books that match a given genre
function getBooksByGenre(genre) {
    return books.filter(function(book) {
        return book.genre.toLowerCase() === genre.toLowerCase();  // Case insensitive match
    });
}

// Example usage
const genre = "Dystopian";
const booksByGenre = getBooksByGenre(genre);
console.log(`Books in the genre "${genre}":`, booksByGenre);

// Write a function that takes an array of prices and calculates the total sum of all prices.

// Function to calculate the total sum of prices
function calculateTotal(prices) {
    return prices.reduce(function(total, price) {
        return total + price;  // Add each price to the total
    }, 0);  // Initialize total to 0
}

// Example usage
const pricesArray = [29.99, 15.50, 42.00, 7.99, 12.75];
const totalSum = calculateTotal(pricesArray);  
console.log("Total sum of prices:", totalSum);

//  Write a function that takes an array of numbers and a number as an argument and returns the index of that number in the array.


// Function to find the index of a number in an array
function findIndexOfNumber(arr, num) {
    return arr.indexOf(num);  // Use indexOf to find the index of the number
}

// Example usage
const numbersArray = [10, 20, 30, 40, 50];
const numberToFind = 30;
const index = findIndexOfNumber(numbersArray, numberToFind);
console.log(`Index of ${numberToFind}:`, index);

// Example with a number not in the array
const notFoundIndex = findIndexOfNumber(numbersArray, 60);
console.log(`Index of 60:`, notFoundIndex);


// Write a function that takes an array of colors and a color as an argument and checks if the array contains that color.


// Function to check if an array contains a specific color
function containsColor(colors, color) {
    return colors.includes(color);  // Use includes to check for the color
}

// Example usage
const colorsArray = ["red", "blue", "green", "yellow"];
const colorToCheck = "blue";
const isColorPresent = containsColor(colorsArray, colorToCheck);

if (isColorPresent) {
    console.log(`The color ${colorToCheck} is present in the array.`);
} else {
    console.log(`The color ${colorToCheck} is not present in the array.`);
}

// Example with a color not in the array
const anotherColorToCheck = "purple";
const isAnotherColorPresent = containsColor(colorsArray, anotherColorToCheck);
console.log(`The color ${anotherColorToCheck} is present in the array: ${isAnotherColorPresent}`);

// Write a loop that counts from 1 to 50 and prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.


// Loop from 1 to 50
for (let i = 1; i <= 50; i++) {
    // Check for multiples of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");  // For multiples of both 3 and 5
    } else if (i % 3 === 0) {
        console.log("Fizz");  // For multiples of 3
    } else if (i % 5 === 0) {
        console.log("Buzz");  // For multiples of 5
    } else {
        console.log(i);  // For other numbers
    }
}