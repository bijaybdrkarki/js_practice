//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature 
let jobTitle = `programmer`;
let geographiclocation = `Brampton`;
let annualSalary = 100000;
let compayName = `Humber`;
console.log(`you will be a `+ jobTitle + ` in ` + geographiclocation + ` making ` + annualSalary + ` for `+ compayName);


let curYear = 2019;
let dob = 1990;
console.log(`you are ${curYear-dob} years old`); 

let curAge = 29;
let maxAge = 80;
let perDay = 3;
console.log(`you will need ${perDay*365*(maxAge-curAge)} to last until the age of ${maxAge}`);

let radius = 7;
console.log(`the circumferernce is ${2*22/7*radius}`);
console.log(`the area is ${22/7*radius*radius}`);

let temp = 25;
console.log(`${temp} C is equivalent to ${(temp*9/5)+32} F`);