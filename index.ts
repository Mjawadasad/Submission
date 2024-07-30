//2.
let personName: string = "JAwad";
let message: string = `Hello ${personName}, would you like to learn some Python today?`;
console.log(message);

//3.

let name1: string = "jawad1";
console.log("Lowercase:", name1.toLowerCase());
console.log("Uppercase:", name1.toUpperCase());
let titleCaseName = name1.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log("Titlecase:", titleCaseName);


//4
let quote: string = "Have patience. All things are difficult before they become easy.";
let author: string = "Sheikh Sadi";
console.log(`${author} once said, “${quote}”`);

//5
let quote1: string = "Have patience. All things are difficult before they become easy.";
let famous_person: string = "Sheikh Sadi";
let message1: string = `${famous_person} once said, “${quote1}”`;
console.log(message1);


//6
let nameWithWhitespace: string = "\t\n  Jawad2  \n\t";
console.log("Name with whitespace:");
console.log(`"${nameWithWhitespace}"`);
let strippedName: string = nameWithWhitespace.trim();
console.log("Name after stripping whitespace:");
console.log(`"${strippedName}"`);

//7
// Addition
let additionResult: number = 5 + 3;
console.log("Addition: 5 + 3 =", additionResult);

// Subtraction
let subtractionResult: number = 12 - 4;
console.log("Subtraction: 12 - 4 =", subtractionResult);

// Multiplication
let multiplicationResult: number = 2 * 4;
console.log("Multiplication: 2 * 4 =", multiplicationResult);

// Division
let divisionResult: number = 16 / 2;
console.log("Division: 16 / 2 =", divisionResult);


//8
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)


//9
let favoriteNumber: number = 7;
let messag4: string = `My favorite number is ${favoriteNumber}.`;
console.log(messag4);


//10
// Author: [M.Jawad Asad]
// Date: 2024-07-30
// This program prints a famous quote by Sheikh Sadi.

let quote2: string = "Have patience. All things are difficult before they become easy.";
let famous_person2: string = "Sheikh Sadi";
let message5: string = `${famous_person2} once said, “${quote2}”`;
console.log(message5);

// Author: [M.Jawad Asad]
// Date: 2024-07-30
//This program prints 8 in four separate line above each other
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)


//11
let names: string[] = ["A", "B", "C", "D"];
console.log(names[0]); 
console.log(names[1]); 
console.log(names[2]); 
console.log(names[3]); 

//12
for (let name of names) {
    console.log(`Hello ${name}, hope you are having a great day!`);
}

//13
let favoriteCars: string[] = ["Toyota", "Honda", "Ford", "Tesla"];
for (let car of favoriteCars) {
    console.log(`I would like to own a ${car}.`);
}


//14
let dinnerGuests: string[] = ["A", "B", "C"];

for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, I would be honored to invite you to dinner. Looking forward to an engaging conversation!`);
}

//15

let dinnerGuests1: string[] = ["A", "B", "C"];
for (let guest of dinnerGuests1) {
    console.log(`Dear ${guest}, I would be honored to invite you to dinner. Looking forward to an engaging conversation!`);
}
console.log("\nUnfortunately, " + dinnerGuests1[1] + " can't make it to the dinner.");
dinnerGuests1[1] = "Nikola Tesla";
console.log("\nUpdated invitations:");
for (let guest of dinnerGuests1) {
    console.log(`Dear ${guest}, I would be honored to invite you to dinner. Looking forward to an engaging conversation!`);
}

//16
let dinnerGuests2: string[] = ["A", "B", "C", "D"];
console.log("Original invitations:");
for (let guest of dinnerGuests2) {
    console.log(`Dear ${guest}, I would be honored to invite you to dinner. Looking forward to an engaging conversation!`);
}
console.log("\nGood news! We have found a bigger dinner table, so we have more space for additional guests.");
dinnerGuests2.unshift("Albert Einstein");
dinnerGuests2.splice(Math.floor(dinnerGuests2.length / 2), 0, "Galileo Galilei");
dinnerGuests2.push("Ada Lovelace");
console.log("\nUpdated invitations:");
for (let guest of dinnerGuests2) {
    console.log(`Dear ${guest}, I would be honored to invite you to dinner. Looking forward to an engaging conversation!`);
}

//17

let dinnerGuests3: string[] = ["A", "B", "C", "D", "E"];

console.log("Original invitations:");
for (let guest of dinnerGuests3) {
    console.log(`Dear ${guest}, I would be honored to invite you to dinner. Looking forward to an engaging conversation!`);
}

console.log("\nDue to the smaller table, we can now only invite two people for dinner.");
while (dinnerGuests3.length > 2) {
    let removedGuest: string = dinnerGuests3.pop()!;
    console.log(`I'm sorry, ${removedGuest}, but I can't invite you to dinner.`);
}
console.log("\nUpdated invitations for the remaining guests:");
for (let guest of dinnerGuests3) {
    console.log(`Dear ${guest}, I am pleased to invite you to dinner. Looking forward to our evening together!`);
}
dinnerGuests3.pop(); 
dinnerGuests3.pop(); 


console.log("\nFinal guest list:", dinnerGuests3);


//18
let placesToVisit: string[] = ["Lahore", "Faisalabad", "Peshawar", "Islamabad", "Karachi"];

console.log("Original order:");
console.log(placesToVisit);

console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

console.log("\nArray in original order:");
console.log(placesToVisit);

console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

console.log("\nArray in original order:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("\nBack to original order:");
console.log(placesToVisit);

placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);

placesToVisit.sort().reverse();
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);


//19

let dinnerGuests4: string[] = ["A", "B", "C", "D", "E"];
console.log(`We are inviting ${dinnerGuests4.length} people to dinner.`);


//20
let rivers: string[] = ["Ravi", "Sindh", "Sutluj", "Biyas"];

console.log("List of rivers in Pakistan:");
console.log(rivers);

//21
type River = {
    name: string;
    length: number; 
};


let rivers1: River[] = [
    { name: "Ravi", length: 720 },
    { name: "Sindh", length: 1_200 },
    { name: "Sutluj", length: 290 },
    { name: "Biyas", length: 160 }
];


console.log("List of rivers:");
for (let river of rivers1) {
    console.log(`River: ${river.name}, Length: ${river.length} km`);
}



//22

// Intentional index error: trying to access an index that does not exist
console.log("Attempting to access a non-existent index:");
console.log(rivers[10]); // This will produce an undefined result because index 10 does not exist

// Correcting the error by using a valid index
console.log("\nAccessing a valid index:");
console.log(rivers[2]); // Accessing a valid index

//23
let car = 'subaru';
let age = 25;
let temperature = 20;
let color = 'blue';
let height = 180;
let country = 'Canada';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');


console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("Is age > 18? I predict True.");
console.log(age > 18); 


console.log("Is age <= 25? I predict True.");
console.log(age <= 25); 


console.log("Is temperature == 20? I predict True.");
console.log(temperature == 20);


console.log("Is color != 'red'? I predict True.");
console.log(color != 'red');

console.log("Is height < 150? I predict False.");
console.log(height < 150); 

console.log("Is country == 'USA'? I predict False.");
console.log(country == 'USA'); 

console.log("Is temperature > 30? I predict False.");
console.log(temperature > 30); 

console.log("Is height >= 170? I predict True.");
console.log(height >= 170);


//24
// Define variables
let string1 = 'Hello';
let string2 = 'hello';
let number1 = 10;
let number2 = 20;
let number3 = 15;
let numbersArray = [1, 2, 3, 4, 5];
let colorsArray = ['red', 'green', 'blue'];
let name2 = 'Alice';

// Convert string to lowercase
let lowerCaseString = string1.toLowerCase();

// Tests for equality and inequality with strings
console.log("Is string1 == 'Hello'? I predict True.");
console.log(string1 == 'Hello'); 

console.log("Is string1 == string2? I predict False.");
console.log(string1 == string2);

console.log("Is string1 != string2? I predict True.");
console.log(string1 != string2); 

// Tests using the lower case function
console.log("Is lowerCaseString == 'hello'? I predict True.");
console.log(lowerCaseString == 'hello'); 

console.log("Is lowerCaseString == 'Hello'? I predict False.");
console.log(lowerCaseString == 'Hello'); 

// Numerical tests
console.log("Is number1 == 10? I predict True.");
console.log(number1 == 10); 

console.log("Is number1 != number2? I predict True.");
console.log(number1 != number2); 

console.log("Is number1 > number2? I predict False.");
console.log(number1 > number2); 

console.log("Is number1 < number2? I predict True.");
console.log(number1 < number2); 

console.log("Is number2 >= number3? I predict True.");
console.log(number2 >= number3); 

console.log("Is number3 <= number1? I predict False.");
console.log(number3 <= number1); 


console.log("Is number1 < number2 and number2 > number3? I predict True.");
console.log(number1 < number2 && number2 > number3); 

console.log("Is number1 < number2 or number1 > number3? I predict True.");
console.log(number1 < number2 || number1 > number3);

console.log("Is number1 > number2 and number3 < number1? I predict False.");
console.log(number1 > number2 && number3 < number1); 


console.log("Is 3 in numbersArray? I predict True.");
console.log(numbersArray.includes(3)); 

console.log("Is 6 in numbersArray? I predict False.");
console.log(numbersArray.includes(6));


console.log("Is 'purple' not in colorsArray? I predict True.");
console.log(!colorsArray.includes('purple')); 

console.log("Is 'blue' not in colorsArray? I predict False.");
console.log(!colorsArray.includes('blue')); 


//25
let alien_color1 = 'green';

if (alien_color1 == 'green') {
    console.log("Congratulations! You just earned 5 points.");
}


let alien_color = 'red'; 

if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points.");
}


//26
let alien_color2 = 'green';

if (alien_color2 == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
}

let alien_color3 = 'red'; // This can be 'yellow' or any other non-green color

if (alien_color3 == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
}


//27

//28

let age1 = 25; 

if (age1 < 2) {
    console.log("The person is a baby.");
} else if (age1 >= 2 && age1 < 4) {
    console.log("The person is a toddler.");
} else if (age1 >= 4 && age1 < 13) {
    console.log("The person is a kid.");
} else if (age1 >= 13 && age1 < 20) {
    console.log("The person is a teenager.");
} else if (age1 >= 20 && age1 < 65) {
    console.log("The person is an adult.");
} else if (age1 >= 65) {
    console.log("The person is an elder.");
}


//29
let favorite_fruits = ['apple', 'banana', 'cherry'];

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('cherry')) {
    console.log("You really like cherries!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes('grape')) {
    console.log("You really like grapes!");
}


//30

let usernames = ['alice', 'bob', 'admin', 'carol', 'dave'];

for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}


let usernames1: string[] = []; 

if (usernames1.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username1 of usernames1) {
        if (username1 === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username1}, thank you for logging in again.`);
        }
    }
}


//31
let current_users = ['alice', 'bob', 'carol', 'dave', 'eve'];
let new_users = ['Frank', 'BOB', 'Grace', 'Alice', 'Henry'];

for (let new_user of new_users) {
    // Convert both lists to lowercase for case-insensitive comparison
    let new_user_lower = new_user.toLowerCase();
    let is_username_taken = current_users.some(user => user.toLowerCase() === new_user_lower);

    if (is_username_taken) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}


//33
let number5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of number5) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}

//34
let favorite_pizzas = ['pepperoni', 'margherita', 'bbq chicken'];

for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");


//35
let animals = ['dog', 'cat', 'rabbit'];

for (let animal of animals) {
    console.log(`${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");


//36
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and the message on it will be: "${message}".`);
}


make_shirt('large', 'Hello World!');


//37
function make_shirt1(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and the message on it will be: "${message}".`);
}


make_shirt1();

make_shirt1('medium');


make_shirt1('small', 'TypeScript is awesome!');

//38
function describe_city(city: string, country: string = 'USA'): void {
    console.log(`${city} is in ${country}.`);
}

describe_city('New York');        
describe_city('Karachi', 'Pakistan'); 
describe_city('Tokyo', 'Japan');  

//39
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

let city1 = city_country('Lahore', 'Pakistan');
let city2 = city_country('New York', 'USA');
let city3 = city_country('Tokyo', 'Japan');

console.log(city1);
console.log(city2);
console.log(city3);


//40
interface Album {
    artist: string;
    title: string;
    tracks?: number; 
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}


let album1 = make_album('Artist One', 'Album One');
let album2 = make_album('Artist Two', 'Album Two', 10);
let album3 = make_album('Artist Three', 'Album Three', 12);


console.log(album1);
console.log(album2);
console.log(album3);

//41
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians = ['A', 'B', 'C', 'D'];

show_magicians(magicians);


//42

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += ' the Great';
    }
}


make_great(magicians);
show_magicians(magicians);

//43
function show_magicians1(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great1(magicians: string[]): string[] {
    let great_magicians = magicians.slice(); // Create a copy of the original array
    for (let i = 0; i < great_magicians.length; i++) {
        great_magicians[i] += ' the Great';
    }
    return great_magicians;
}

let original_magicians = ['A', 'B', 'C', 'D'];
let great_magicians = make_great1(original_magicians);

console.log('Original Magicians:');
show_magicians(original_magicians);

console.log('\nGreat Magicians:');
show_magicians(great_magicians);


//44
function make_sandwich(...items: string[]): void {
    console.log("Sandwich ordered with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log(); 
}


make_sandwich('lettuce', 'tomato', 'cheese');
make_sandwich('ham', 'turkey', 'bacon', 'egg');
make_sandwich('peanut butter', 'jelly');


//45
function createCar(manufacturer: string, model: string, ...additionalInfo: [string, any][]): object {
    // Create an object with the manufacturer and model
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add additional info to the car object
    for (let [key, value] of additionalInfo) {
        car[key] = value;
    }

    return car;
}

// Call the function with required and optional information
let car1 = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2024]);
let car2 = createCar('Honda', 'Civic', ['color', 'red'], ['features', 'sunroof']);
let car3 = createCar('Ford', 'Mustang', ['year', 2023], ['features', 'leather seats'], ['color', 'black']);

// Print the objects to verify
console.log(car1);
console.log(car2);
console.log(car3);
