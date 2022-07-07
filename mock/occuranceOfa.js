var s="Java"
var a=[]
for(var i=0;i<s.length;i++)
{
    a[i]=s.charAt(i)
}
for(var i=0;i<a.length;i++)
{
    for (var j = i; j < a.length; j++) {
        if(a[i]==a[j])
        {
            a.splice(a.length-1,1)
        }
        
    }
}
a.forEach(element => {
    var count=0
    for (var i = 0; i < s.length; i++) {
        if(element==s.charAt(i))
        {
            count++
        }        
    }
    if (count==2) {
        console.log(`The Character ${element} is repeated ${count} times`);
    }
});