// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //unnamed iife but parameter passed
    console.log(`DB CONNECTED TWO ${name}`);
} )('harshit') //argument