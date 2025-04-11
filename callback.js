// normal function

/* function first(){
    console.log("Print First");
}
function second(){
    console.log("Print Second");
}
function third(){
    console.log("Print Thrid");
}
first();
third();
second(); */

// usnig callback function
// first way

/* function first(){
    console.log("Print First");
}
function second(){
    console.log("Print Second");
}
function third(){
    console.log("Print Third");
}
first();
setTimeout(second,2000);
third() */;

//second way
function first(){
    console.log("Print First");
}

function third(){
    console.log("Print Third");
}
first();
setTimeout(function second(){
    console.log("Print Second");
},2000);
third()

//third

//second way
function first(){
    console.log("Print First");
}

function third(){
    console.log("Print Third");
}
first();
setTimeout(()=>{
    console.log("Print Second");
},2000);
third()












//normal function

// using assigning to a variable reslut
/* function display(res){
    console.log(`Addition of two number is ${res}`);
}
function calculation(a,b){
  let sum=a+b;
  return sum;
}
calculation(2,3);
let result=calculation(2,3);
display(result); */

// using calling funtion display by function calculation

/* function display(res){
    console.log(`Addition of two number is ${res}`);
}
function calculation(a,b){
  let sum=a+b;
 display(sum);
}
calculation(3,3); */

// just to prevent then function calling of display inside the calculation fn even not to call two function to display the result

/* function display(res){
 console.log(`Addition of two nubmer is ${res}`);
}
function calculation(a,b, cb){
    let sum=a+b;
    cb(sum);
}
calculation(4,3,display); */