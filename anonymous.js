//Anonymous function

//basic or normal fn
/* function demo(){

}
demo(); */

// another way to declare the fn

/* let demo=function(){

}
demo(); */

// another way using arrow funtion

/* let demo=()=>{

}
demo(); */

// arrow funtion - single line statement without parameters

/* let demo=()=>{ console.log("hello JS");}
demo(); */

// arrow funtion - multi line statement with parameters
let demo=(a,b)=>{
  let c=a+b;
  console.log(`Addition of two
              number is ${c}`);             
}
demo(3,5);

//call back funtion - A callback function is the type 
// of JavaScript function that has another function passed in 
// as an argument to be executed at a later time.


let display=function(){
   console.log("Hello JavaScript!");
}

//passing as an aurgment to setTimout so display fn is a callback fn
setTimeout(display, 2000);

// WAP to get the result of  the addition of prime numbers(1-100) and 
//display after 3seconds

function add(a,b){
    var c=a+b;
    console.log("Addition of a and b is "+ c);
    
    function mul(d){
        var e=c*d
        console.log("Multiplication of c and d is "+ e);
    }
    mul(10);
}
add(3,5);

// using function clouser
//An inner function remembers variables from its outer function 
// even after the outer function has finished executing.

function add(a, b) {
    var c = a + b;
    console.log("Addition of a and b is " + c);

    return function(d) {
        var e = c * d;
        console.log("Multiplication of c and d is " + e);
    }
}
var multiply = add(3, 5); // add() runs and returns the inner function
multiply(10);             // now we use the closure
