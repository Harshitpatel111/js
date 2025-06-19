const user = {
    username: "harshit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "harshit"
//     console.log(this.username);
// }                                              

// chai()                                         //output:undefined

// const chai = function () {
//     let username = "harshit"
//     console.log(this.username);
// }                                              //output:undefined

const chai =  () => {
    let username = "harshit"
    console.log(this);
}                                                 //syntax for arrow function    () => {}


// chai()                                         //output:undefined

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }                                              //basic arrow function (explicit)

// when written in {}need to write return keyword, and when written in () no need to write return keyword

// const addTwo = (num1, num2) =>  num1 + num2    //implicit return 

// const addTwo = (num1, num2) => ( num1 + num2 )  // same implicit but can be written like this 

const addTwo = (num1, num2) => ({username: "harshit"})   


console.log(addTwo(3, 4))


