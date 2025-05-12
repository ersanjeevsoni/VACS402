/* const myPromise = new Promise((resolve, reject) =>{
    let getGarlic = true
    console.log('pending...');
    if (getGarlic == true) {
        resolve('resolved: There is Garlic Powder')
    } else {
        reject('rejected: There is no Garlic Powder')    
    }
})
myPromise.then((message) => {
    console.log('Make noodles because the promise is' + ' '+ message)
}).catch((message) =>{
    console.log('Make toast because the promise is ' + ' '+ message) 
}) */

    let promise = new Promise(function(resolve, reject) {
        // Asynchronous operation (e.g., fetching data, setting a timeout)
        setTimeout(() => {
          const success = true;
          if (success) {
            resolve("Operation completed successfully!");
          } else {
            reject("Operation failed!");
          }
        }, 1000);
      });
      
      promise.then(function(result) {
        console.log(result); // Output: "Operation completed successfully!"
      }).catch(function(error) {
        console.error(error); // Output: "Operation failed!"
      });