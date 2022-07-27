// // let country = "India";
// // console.log(country);
// // let pop = 1300000000;
// // console.log(typeof true);
// // const a = 10;
// // console.log(a)
// // console.log(2 ** 3);
// // const firstName = 'Jonas';
// // const lastName = 'S';
// // console.log(firstName + " " + lastName);
// // age = 19;
// // const b = age >= 18;
// // console.log(b);
// // console.log(2022 - 1991 > 2023 - 1991)

// // let x, y;
// // x = y = 25 - 10 - 5; //x=y=10  "=" precedence is executed from left to right
// // const average = (x + y) / 2;
// // console.log(x, y, average);

// // let mWt = 95;
// // let jWt = 85;
// // let mHt = 1.88;
// // let jHt = 1.76;
// // let mBmi = mWt / mHt ** 2;
// // let jBmi = jWt / jHt ** 2;
// // let markHigherBMI = (mBmi > jBmi);
// // console.log(markHigherBMI);

// // const firstName = 'Jonas';
// // const job = 'teacher';
// // const birthYear = 1991;
// // const year = 2037;
// // const jonas = `I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job`;
// // // console.log(jonas);

// // const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// // console.log(jonasNew);

// // const age = 19;
// // let a = 'A';
// // const isOldEnough = age >= 18;

// // if (isOldEnough) {
// //     console.log(`${a} can start driving`)
// // }
// // else {
// //     console.log(`${a} cannot start driving`)
// // }

// //type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number('Jonas'));
// console.log(String(23));

// //type coercion- behind scenes type conversion automatically

// console.log('I am ' + 23 + ' years old')//+ present here triggers type coercion
// console.log('23' - '10' - 3)//strings converted to numbers

// console.log('23' + '10' + 3)//numbers strings converted to strings


// //5 falsy values: 0, '', undefined, null,NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));

// const money = 0;
// if (money) { // Here money type coercion to boolean
//     console.log("Don't spend it all;");

// }
// else {
//     console.log("You should get a job")
// }

// let height = 200;
// if (height) {
//     console.log('Defined');
// }
// else {
//     console.log('Undefined');
// }


// const age = 18;
// if (age === 18) console.log("You just became an adult")

// const favourite = Number(prompt("what's your favourite number?"));
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log('Cool 23 is amazing')
// }
// else if (favourite === 7) console.log("7 is cool")
// else console.log('Number is not 23 or 7')

// let a = (97 + 112 + 101) / 3;
// let b = (109 + 95 + 123) / 3;
// console.log(a, b);
// let c = a > 100;
// let d = b > 100;
// if (c && d) {
//     if ((a > b))
//         console.log("Dolphins win!");
//     else if ((b > a))
//         console.log("Koalas win!");
//     else
//         console.log("Draw!");
// }
// else {
//     console.log("no winner");
// }

// const day = 'wednesday';
// switch (day) {
//     case 'monday': console.log("Hi"); break;
//     case 'wednesday':
//     case 'thursday': console.log("Hi2"); break;
//     default: console.log("Not a vaild day");
// }

// const age = 25;
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

let tip;
const a = Number(prompt("Enter the bill value"));
tip = (50 <= a <= 300) ? 15 : 20;
console.log(`The bill is ${a + ((tip / 100) * a)}`)