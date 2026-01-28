console.log("hello world");
let name="rahul"
let age=20
let isCool = true

let person = { name: "Rahul", age: 20 };        // Object
let colors = ["red", "blue", "green"];          // Array
let greet = function() { console.log("Hi") };   // Function


console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});


if (age > 18 && age < 60) {
  console.log("You are eligible");
}

for (let i = 0; i < 10; i++) {
if (i === 5) {
break; // exits the loop when i equals 5
}
    console.log(i);
}

console.log(person.name);
console.log(person["age"]);


let user = {
  name: "Sara",
  greet: function () {
    console.log("Hello, " + this.name);
}
};
user.greet();


let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); 
fruits[1] = "orange";
console.log(fruits);
console.log(fruits.length);


for (let fruit of fruits) {
  console.log(fruit);
}

