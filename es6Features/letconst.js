// console.log(a);   //undefined
// var a 
// a = 100;
// var a =200
// console.log(a);   //200

//****************************************************************************************/

// console.log(x);    //ReferenceError: Cannot access 'x' before initialization
// let x 
// x = 20
// let x = 35    //SyntaxError: Identifier 'x' has already been declared (Redeclaration is not allowed)
// x = 95              //Reinitialisation is allowed
// console.log(x);    //95
//****************************************************************************************/

// const y = 3.1415;

// function fun1() {
//     console.log("Smitha");
// }
// y = 3;                  //TypeError: Assignment to constant variable.
// console.log(y);    

//****************************************************************************************/
// console.log(index);                 //undefined
// for (var index = 0; index < 5; index++) {
//     console.log(index);
// }                                                   // 0 1 2 3 4
// console.log(index);    //5

//****************************************************************************************/

//console.log(index);       //ReferenceError: index is not defined
// for (let index = 0; index < 5; index++) {
//     console.log(index);                     //0 1, 2, 3, 4
// }
//console.log(index); //ReferenceError: index is not defined          //5  reference_error undefined

//****************************************************************************************/

// var a = 100;
// console.log(a);   //100
// {
//     var a = 200
//     console.log(a);  //200
// }
// console.log(a);   //200

//****************************************************************************************/

// let x = 10
// {
//     let x = 20
// }
// console.log(x);   //10 

//****************************************************************************************/

// var a = 20
// let a = 30
// console.log(a);  //SyntaxError: Identifier 'a' has already been declared

//****************************************************************************************/

