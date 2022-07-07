var str=["Hi","Hello","Everyone"]
var max=str[0]
str.forEach(element => {
    if(max.length<element.length)
    {
        max=element
    }
});
console.log("Maximum length String:"+max);
