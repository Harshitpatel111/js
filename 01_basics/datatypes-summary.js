//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3//no specific type like decimal float all are considered as number

const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined

const id = Symbol('123') // return type is symbol datatype 
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n //when n written in end it is converted to bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  //arrays
let myObj = {
    name: "h",
    age: 22,
} //object in key value pair stored in variable myObj and in curly braces obj is declared

const myFunction = function(){
    console.log("Hello world");
}  //function 

console.log(typeof anotherId); // to detect datatype



//========================================================

//Stack (Primitive datatypes use stack)variable declared copy is given , Heap (non-primitive use this )gives reference/origin 
// therefore when changed value in stack copy is changed whereas in heap the whole original value is changed as reference is given
let myGender="Male"
let anotherGneder=myGender
anotherGender="Female"
console.log(myGender);
console.log(anotherGneder);

