'use strict'; // helps to identify bugs

// let hasDriversLicense = false;
// let passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive')

// const interface = 'Audio'

// function logger() {
//     console.log('My name is Jonas');
// }

// //calling/running/invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const a = fruitProcessor(5, 0);
// //console.log(a);
// console.log(fruitProcessor(5, 0))

//function declaration
// function calcAge1(birthYear) {//birthYear is parameter
//     const age = 2037 - birthYear;
//     return age;
// }

// const age1 = calcAge1(1991);//1991 is argument//birthYear is parameter
// console.log(age1);

// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

//Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;//value is automatically returned
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstname) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement;
//     return `${firstname} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'A'))

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3))

//Coding challenge 1
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const yearsUntilRetirement = function (birthYear, firstname) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     //return retirement;
//     if (retirement > 0) {
//         console.log("A")
//         return retirement;
//     }
//     else {
//         console.log("A")
//         return -1;
//     }

// }
// console.log(yearsUntilRetirement(1991, 'Jonas'))

// const calcAverage = (v1, v2, v3) => {
//     const avg = (v1 + v2 + v3) / 3;
//     return avg;
// }

// function checkWinner(a, b, c, d, e, f) {
//     const avgDolphins = calcAverage(a, b, c);
//     const avgKoalas = calcAverage(d, e, f);
//     if (avgDolphins >= (2 * avgKoalas))
//         console.log("Winner is Dolphins");
//     else if (avgKoalas >= (2 * avgDolphins))
//         console.log("Winner is Koalas");
//     else
//         console.log("No winner");



// }

// checkWinner(85, 54, 41, 23, 34, 27);


//arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
// let friends = ['Michael', 'Steven', 'Peter'];
// //console.log(friends);
// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';//array element can be mutated, even though array element type is const, but whole array cant be changed

//console.log(friends);

//example of array inside another array
// const jonas = ['Jonas', 'Schedtman', 2037 - 1991, friends];// JS expect an expression in an array
// //console.log(jonas);

// //Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age3 = calcAge(years[years.length - 1]);

// const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];//function calls can be made in array
// //console.log("array=" + ages);

// //array methods
// friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');// adds element to the end of the array
// console.log(friends);
// console.log(friends.length)

// friends.unshift('John');//inserts element to the start of the array
// console.log(friends);
// const popped = friends.pop();//removes last element and returns it
// console.log(popped);
// console.log(friends);

// friends.shift();//removes first element and returns it
// console.log(friends);

// console.log(friends.indexOf('Bob'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));//returns true or false if element is present or not present in array. Uses strict equality


//Coding challenge 2
// function calcAge(a) {
//     if (a > 50 && a < 300)
//         return ((0.15) * a);
//     else
//         return ((0.20) * a);


// }

// let bills = [125, 555, 44];
// let tips = [calcAge(bills[0]), calcAge(bills[1]), calcAge(bills[2])];

// console.log(tips);

// let total = [Number(bills[0] + tips[0]), Number(bills[1] + tips[1]), Number(bills[2] + tips[2])]
// console.log(total);


//objects
const jonasArray = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];

// const jonas = {//object creation
//     firstName: 'Jonas', LastName: 'Schmedtmann', age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);
// console.log(jonas.LastName);//access a value using dot notation
// console.log(jonas['LastName']);//access a value using bracket notation

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['Last' + nameKey]);

// const interestedIn = prompt("Choose");
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//     console.log("Correct");
// }
// else {
//     console.log("Wrong request");
// }

// jonas.location = "Portugal";
// console.log(jonas);

// //Challenge
// // Jonas has 3 friends, and his best friend is called Michael

// let a = jonas.firstName;
// let b = jonas.friends.length;
// let c = jonas.friends[0];
// console.log(jonas['friends[0]']);
// console.log(`${a} has ${b} friends, and his best friend is called ${c}`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     calcAge: function () {
//         //console.log(this);//this points to object jonas
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     calcFaa: function () {
//         this.age = 2037 - this.birthYear;
//         return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//     }
// };

// // console.log(jonas.calcAge());
// // console.log(jonas.age);
// // console.log(jonas['calcAge'](1991))
// console.log(jonas.calcFaa());

//coding challenge
// const Mark = {
//     fullName: 'Mark Miller',
//     massM: 78,
//     heightM: 1.69,
//     calcBMIM: function () {
//         this.BMIM = this.massM / (this.heightM * this.heightM);
//     }
// }

// const John = {
//     fullName: 'John Smith',
//     massJ: 92,
//     heightJ: 1.95,
//     calcBMIJ: function () {
//         this.BMIJ = this.massJ / (this.heightJ * this.heightJ);
//     }
// }

// const a = Mark.calcBMIM();
// const b = John.calcBMIJ();
// if (a > b)
//     console.log(`${Mark.fullName}'s BMI (${Mark.BMIM}) is higher than ${John.fullName}'s BMI (${John.BMIJ})`);
// else
//     console.log(`${John.fullName}'s BMI (${John.BMIJ}) is higher than ${Mark.fullName}'s BMI (${Mark.BMIM})`);


// const jonas = [
//     'Jonas',
//     'Schedtmann',
//     1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = []

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i]);

//     //types[i] = typeof jonas[i];

//     types.push(typeof jonas[i])
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);

// }
// console.log(ages);

// //continue and break
// for (let i = 0; i <= jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'number') break;

//     console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//     'Jonas',
//     'Schedtmann',
//     1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],

// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise <= 4; exercise++) {
//     console.log(`-----Starting exercise ${exercise}`);
//     for (let rep = 1; rep <= 6; rep++) {
//         console.log(`Lifting weight repetition ${rep}`);

//     }
// }

// let rep = 1
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`)
//     rep++;
// }

// let dice = Math.random()
// console.log(dice);

// while (dice != 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end')
// }

let bills = [22, 295, 176, 440, 447, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

function calcTip(a) {
    if (a > 50 && a < 300) {
        return (0.15 * a);
    }
    else {
        return (0.2 * a);
    }



}
let a, b;
for (let i = 0; i < bills.length; i++) {
    const a = calcTip(bills[i]);
    tips.push(a);
    totals.push(a + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

let sum = 0;
const calcAverage = function (arr) {

    for (let i = 0; i < arr.length; i++)
        sum += totals[i];

}

calcAverage(totals);
console.log(sum / (totals.length));