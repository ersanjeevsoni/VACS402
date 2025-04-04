// function in JavaScript

//function declaration without parameter

function greet(){
    console.log("Hello Js");
    

}
greet();  // function calling

// function with paremeters
/* function calculation(a,b){
  var c=a+b;
  console.log(c);
}
calculation(6,7); */

// function with default parameter
/* function calculation(a,b=8){
    var c=a*b;
    console.log(c);
  }
  calculation(10); */

// Immediately invoked function expression(iife) in Javascript

/* (function calculation(x,y){
    var z=x/y;
    //template literals
    console.log(`Result of two number is ${z}`);
    
})(20,12); */

//function clouser
//A closure is a function that has access to the parent scope, 
// after the parent function has closed

function cal(a,b){
    return{
       add:()=>console.log(a+b),
       mul:()=>console.log(a*b)
        
    };
};
    let res=cal(5,7);
    res.add();
    res.mul();




  