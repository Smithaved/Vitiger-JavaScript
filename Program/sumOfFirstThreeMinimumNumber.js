var num=[30,50,60,20]
num.sort((a,b)=>{return a-b})
var sum=0
for(var i=0;i<3;i++)
{
    sum=sum+num[i]
}
console.log("sum of first three minimum number ="+sum);
