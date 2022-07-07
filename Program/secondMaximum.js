var num=[30,50,60,20]
//Second Maximum
var max=num[0]
var secondMax=0
num.forEach(element => {
    if(max<element)
    {
        secondMax=max
        max=element
    }
    else if(secondMax<element){
        secondMax=element
    }
});
console.log("First Maximum Number="+max);
console.log("Second Maximum Number="+secondMax);
