const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   //takes array of dc as single element 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // here both merges down ,but in new array so we are storing in new 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   //spread 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]    //array inside array

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Harshit"))
console.log(Array.from("Harshit "))
console.log(Array.from({name: "harshit "})) // interesting,need to specify for what you need array for key or for value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));