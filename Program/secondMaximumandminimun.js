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
//Second Minimum
var min=num[0]
var secondMin=0;
num.forEach(element => {
    if(min>element)
    {
        secondMin=min
        min=element
    }
    else if(secondMin>element){
        secondmin=element
    }
});
console.log("First Minimum Number="+min);
console.log("Second Minimum Number="+secondMin);
