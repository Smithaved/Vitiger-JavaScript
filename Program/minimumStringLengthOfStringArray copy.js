var str=["Hi","Hello","Everyone"]
//Minimum
var min=str[0]
str.forEach(element => {
    if(min.length>element.length)
    {
        min=element
    }
});
console.log("Minimum length String:"+min);