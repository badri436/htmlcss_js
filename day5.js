// Date Formats
const date = new Date();
console.log(date.getFullYear())

const d = new Date();
// d.setFullYear(2023, 07, 21);
console.log("date", d)
d.setMilliseconds(500)
d.setMonth(0)
console.log("milliseconds", d)

// setDate()	    Set the day as a number (1-31)
// setFullYear()	Set the year (optionally month and day)
// setHours()	    Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	    Set the minutes (0-59)
// setMonth()	    Set the month (0-11)
// setSeconds()	    Set the seconds (0-59)
// setTime()        Set the time

// Math functions
console.log("Random", Math.random())
console.log(5 * Math.random())
console.log(Math.round(4.6)) //rounded
console.log(Math.ceil(4.2)) //rounded up to nearest
console.log(Math.floor(5.8)) //rounded down to nearest
console.log(Math.sign(-4)) //returns 0 or -1 or 1

// JS errors
try {
    console.log("hi")
} catch (error) {
    console.log("error")
} finally {
    console.log("i will print always")
}

// Map 
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits)
fruits.set("new", 58)
console.log(fruits)
console.log(fruits.get("bananas"))
console.log(fruits.has("oranges"))
fruits.delete("new")
console.log("after deletion", fruits)

// Set
const cars = new Set([1, 5, 1, 9, 8])
console.log(cars)

// Class and constructor
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
console.log(myCar1.name)

// Types of functions
function myfunc(a, b) {
    if (a == b) {
        console.log("equals")
    }
    console.log("hi from myfun")
}
myfunc(1, 1)
myfunc(1, 2)

const newfun = () => {
    console.log("hi from arrow myfun")
}
newfun()

// JSON
// Json arrays
let json = {
    "employees": [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ]
}

let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
console.log("text", text)
console.log(JSON.parse(text)) //json inbuilt

// Object Constructor
// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.eyeColor)

// DOM Document Object Model