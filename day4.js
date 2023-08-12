
const trimExample = " Hi i am"
let numnber = 5
let letters = "bad"
let array = [1, "java", 2]
let array1 = [3, "java22", 5]
let object = {
    name: "xyz",
    age: 19
}
let Regexexample = 'Welcome Microsoft'
// String methods
console.log(letters.length)
console.log(letters.charAt(0))
console.log(letters.toLocaleUpperCase())
console.log("split", letters.split("a"))
console.log(letters.concat(" im another string"))
console.log(letters.charAt(1))
console.log(trimExample)
console.log(trimExample.trim())
console.log(Regexexample.replace(/MICROSOFT/i, "Apple"))
console.log(trimExample.slice(1, 5))

// String search
let text = "Please locate where 'locate' occurs!";
console.log(text.search("locate"));

// Number methods
let x = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2))
console.log(x.toFixed(4));
console.log(x.toFixed(6));

let y = 9.656;
console.log("precision")
console.log(y.toPrecision());
console.log(y.toPrecision(2));
console.log(y.toPrecision(4));
console.log(y.toPrecision(6));

// Array Methods
console.log(array.length)
console.log("join array", array.join("*"))
array1.push("new")
array1.push("new2")
console.log(array1)
array1.pop()
console.log(array1)
array.unshift("apple")
console.log(array)
array.shift()
console.log("shift", array)
delete array1[0]
console.log("after delete", array1.length)

let numarr = [5, 1, 8, 3, 9]
numarr.sort()
console.log("sort", numarr)
numarr.reverse()
console.log(numarr)

// array iteration 
let arrIter = [5, 6, 8, 10, "hi"]

let mapExam = arrIter.map((i) => {
    console.log(i)
    return i
})
console.log("map", mapExam)

let filterExam = arrIter.filter((i) => {
    return i > 5
})
console.log("filter", filterExam)

let someExam = arrIter.some((i) => {
    return i > 6
})
let everyExam = arrIter.every((i) => {
    return i > 6
})
console.log("some", someExam)
console.log("every", everyExam)
console.log("index", arrIter.indexOf(8))

let FindExam = arrIter.find((i) => {
    return i == "hi"
})

console.log("find", FindExam)

let containsEx = ["Mango", "Apple", "Lemon"]
console.log("Includes", containsEx.includes("App"))

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year)

// loops

// If
let num1 = 10
let num2 = 5
if (num1 > num2) {
    console.log(num1, " is greater")
} else {
    console.log(num2, " is greater")
}


// While
let i = 0
while (i < 3) {
    console.log("printing ", i, " time")
    i++
}
let forExam = [1, 5, 8, 10]
// Simple For
for (i = 0; i < forExam.length; i++) {
    console.log("printing ", forExam[i], " time")
}

// For In
const person = { fname: "John", lname: "Doe", age: 25 };
let text1 = "";
for (let x in person) {
    console.log("Key: ", x)
    text1 += person[x];
}
console.log("accessing object", person["fname"])
// For of
let text2 = "Apple"
for (let x of text2) {
    console.log(x)
}

// Switch
let n = 2
switch (n) {
    case 0:
        console.log("im from 0");
        break;
    case 3:
        console.log("im from 3");
        break;
    default:
        console.log("option invalid")
        break;
}


let a = [1, 8, 5, 8]

for (let i = 0; i < 4; i++) {
    if (a[i] == 8) {
        console.log("8 is found");
        // break;
    }
}
