var a=[10,50,100,115,53,40]
a.sort((a,b)=>{return a-b})
console.log(a);
var sum=0
for (var i = 0; i < 3; i++) {
    sum=sum+a[i]    
}
console.log(sum);