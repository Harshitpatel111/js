const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
//when printing console log key it will give kye from 0 to n-1
//but when arr_name[key] given it will give value of key 
//the main function of for in loop
 
for (const key in programming) {
    //console.log(programming[key]);
}

// using this loop map is not iteratable

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }