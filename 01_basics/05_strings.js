const name = "harshit"
const repoCount = 50

// console.log(name + repoCount + " Value");   this is very outdated way to write a code

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // using ${}gives addtional functionalities to operate on variable by writing in that brackets only

const gameName = new String('harshit-hb-com') // syntax to declare string as object 

// when string declared as object it have multiple function ,some are below:

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "   harshit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));