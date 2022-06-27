var num=[30,50,60,20]
//First Maximum
num.sort((a,b)=>{return b-a})
var max=num[0]
console.log(max);
//First Minimum
num.sort((a,b)=>{return a-b})
var min=num[0]
console.log(min);