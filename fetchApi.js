/* const url="https://fakestoreapi.com/products/";
const option={};
const pr=fetch(url,option);
console.log(pr);

const successCB=(res)=>{
    //console.log("Data Fatched", res);
   const pr2=res.json();
    pr2.then(result);
}

const errorCB=(res)=>{
    console.log("Data Failed",res);
}
pr.then(successCB).catch(errorCB);

const result=(data)=>{
    console.log("Final Data here", data);
 
} */
//=============short code for above code==============
/* const url="https://fakestoreapi.com/products/";
const option={};
const pr=fetch(url,option);
const successCB=(res)=>{
    //console.log("Data Fatched", res);
   const pr2=res.json();
    pr2.then((data)=>console.log("Final Data here", data));
}
 

const errorCB=(res)=>{
    console.log("Data Failed",res);
}
pr.then(successCB).catch(errorCB);  */

// display the fetched data on browser using html==================

 const getdata = () => {
    const val = document.getElementById("search_id").value;
    
    fetch(`https://api.github.com/users/${val}`)
        .then((res) => res.json())
        .then((data) => {
            // Display the JSON data as a string
            const myJSON = JSON.stringify(data,null,2); // Pretty-printed JSON
            document.getElementById("display").innerText = myJSON;
        })
        .catch((error) => {
            document.getElementById("display").innerText = `Error: ${error.message}`;
        });
}; 
