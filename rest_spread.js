/* function cal(a,b,...param){
    let sum=a+b;
    console.log(`Addition of two numbers ${sum}`);
let reslut=0;
    for(let i of param){
        reslut+=i;
    }
    console.log("Addiotn of reaming numbers " + reslut);
    
    

}
cal(2,3,45,4,53,45,50,44,78,78,0,23,54,32,21,29); */

let a = [10, 20];
let b = [...a, 30, 40];
console.log(a); 
console.log(b); 

console.log(Math.min(...a));

const usr = {
    name: 'Jen',
    age: 22
};

const updateusr={
    name:"Dev",
    age:25
}

const cloneUsr = { ...usr, ...updateusr};
console.log(cloneUsr);



