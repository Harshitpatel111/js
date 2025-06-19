// const tinderUser = new Object()        singleton object
const tinderUser = {}                 // non singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "harshit",
            lastname: "bhuva"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }   //this gives objects inside an object 
// const obj3 = Object.assign({}, obj1, obj2, obj4)                   //the{} here is target and the obj1,obj2,obj4 are source

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]                            //object declared in array

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));          // to access all keys ,output is in array 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // to check value is present or not 


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "harshit"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "harshit",
//     "coursename": "js in hindi",
//     "price": "free"
// }  json in form of object syntax key and value in string 

[// json in form of array that has object 
    {},
    {},
    {}
]