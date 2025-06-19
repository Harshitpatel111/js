// singleton
// Object.create   declaring through constructor

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Harshit",
    "full name": "Harshit Bhuva",
    [mySym]: "mykey1",  // always use this syntax to define symbol so datatype will stay sym ,so first declare it as declared above
    age: 18,
    location: "Pune",
    email: "harshit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])         // everytime remember this syntax
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])   

JsUser.email = "harshit@chatgpt.com"
// Object.freeze(JsUser)       //if you want that no one should change it will not propagate
JsUser.email = "harshit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
