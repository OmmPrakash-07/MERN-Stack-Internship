//1. What will be the output of the following code?
console.log(5 == '5');

//2. What will be the output of the following code?
console.log(5 === '5');

//3. What is the difference between == and === in JavaScript?
console.log(7 == '7');          // Value only
console.log(18 === '18');      // Value and Type

//4. Predict the output:
console.log(0 == false);
console.log(0 === false);

//5. What does the != operator do in JavaScript? Give an example.
console.log(5 != '5'); 

//6. What does the !== operator do in JavaScript? How is it different from !=?
console.log(5 !== '5');  

//7. What will be the result of the following comparisons?
console.log(18 >= 7);
console.log(18 <= 7);
console.log(18 <= 18);

//8. What will be the output of this?
console.log(typeof 123);
console.log(typeof 'hello');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

//9. Explain why typeof null returns 'object' in JavaScript.


//10. What is the output of this code?
let x = "5";
let y = 5;
console.log(x == y);
console.log(x === y);

//11. How can typeof be used to check if a value is a string? Provide an example.
console.log(typeof 'hello' === 'string');

let value = "Shivansh";
if (typeof value === 'string') y
console.log("It's a string!");

//12. What will be the output of:
console.log("10" != 10);
console.log("10" !== 10);

//13. What is the output of:
console.log(typeof typeof 123);

//14. What is the output of this expression and why?
console.log(5 <= "5");
//In JavaScript, when you compare two different types using something like <=, JavaScript will try to convert them to the same type automatically. This is called type coercion.
//So in this case:
//5 is a number and "5" is a string. 
//JavaScript will convert the number 5 to a string "5" or Change the string "5" into the number 5 before doing the comparison.

//15. Why does typeof NaN return 'number'?
//The reason typeof NaN returns 'number' in JavaScript is because NaN is technically a special value of the number type.
//NaN stands for "Not a Number".
console.log(typeof NaN);

//16. Evaluate the result:
let a = "hello";
console.log(a != "Hello");
console.log(a!== "Hello");

//17. What will be the output of these comparisons?
console.log(true == 1);
console.log(true === 1);

//18. What is the result of the following?
console.log(false != 0);
console.log(false !== 0);

//19. What will this log?
console.log("123" != 123);
console.log("123" !== 123);

//20. What is the output of:
console.log(true != "true");
console.log(true !== "true");