var arr=[10,30,24,50]
/*Case1*/
var a=arr[1]
var b=arr[2]
console.log(a,b);
/*Case2*/
var [a,b]=arr
console.log(a,b);
/*Case3*/
var [a,b,c]=arr
console.log(a,b,c);
/*Case4*/
var [a,,b,c]=arr
console.log(a,b,c);
/*******************************/
var a=arr[arr.length-1]
console.log(a);
