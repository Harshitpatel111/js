// let myName = "harshit     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.harshit = function(){      //injecting prototype to object so all object(array,string,function) can use that functionality
    console.log(`harshit is present in all objects`);
}

Array.prototype.heyHarshit = function(){ //injecting prototype to array but here only array can access not function
    console.log(`harshit says hello`);
}

// heroPower.harshit()   here heroPower is object and we have injected harshit prototype so can print message given in harshit
// myHeros.harshit()    array is also an object so this will also print harshit
// myHeros.heyHarshit()
// heroPower.heyHarshit()   this cannot access as it is only given to array not to object 

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"harshit".trueLength()
"iceTea".trueLength()