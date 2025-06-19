//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "harshit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);      // gives reference error as this cannot be accessed outside the block of function two

     two()

}

// one()                 //this when gets executed give output of harshit as it is executing two()

if (true) {
    const username = "harshit"
    if (username === "harshit") {
        const website = " youtube"
        // console.log(username + website);       // this will get executed as both can be accessed
    }
    // console.log(website);                      // this will give error ,as cannot be accessed as outside of scope
}

// console.log(username);                         // this will also give error ,as cannot be accessed as outside of scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))                 

function addone(num){               // here the function is declared as it is so when done console can be accessed and doesn't give error
    return num + 1
}                                    



addTwo(5)                             // here but addTwo is accessed before initialisation so gives error,and the function is declared and hold in variable it is 
                                                                                                                                           // function hoisting
const addTwo = function(num){        //expression
    return num + 2
}