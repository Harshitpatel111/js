
function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
}
// sayMyName   reference
// sayMyName()   execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  //if function returns value then only we can store it in variable

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("harshit"))
// console.log(loginUserMessage("harshit"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}             //... is called rest or spread ooperator as per use,it is used to multi[ple parameters

// console.log(calculateCartPrice(200, 400, 500, 2000))  when in output it gives 500 2000 as val1 has 200 and val2 has 400

const user = {
    username: "harshit",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}                                         //syntax for passing object in function

// handleObject(user)                   // passing argument as object in function
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));           // syntax for array arguments in function