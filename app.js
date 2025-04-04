/* let add = (num1, num2) => {
    return {
        add: () => console.log(num1 + num2),
        mul: () => console.log(num1 * num2)
    };
};

// Storing returned functions inside `operations`
let operations = add(2, 4);

operations.add(); // Output: 6
operations.mul(); // Output: 8
 */

function makePrice2(p1, p2,...param) {
    console.log(p1, p2);
    console.log(param); //valid array (so while using no need to convert)
    console.log(Array.isArray(param)); // true 
   let total = 0;
     for (let i = 0; i < arguments.length; i++) {
         total = total + arguments[i];
      }console.log(`Total Value ${total} USD`);
  }makePrice2(50, 20, 200, 300, 400, 50, 4000, 1200);
  