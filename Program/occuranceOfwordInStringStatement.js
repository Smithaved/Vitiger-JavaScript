var s="Hi I am Smitha Hi"
var a=s.split(" ")
for(var i=0;i<a.length;i++)
{
    var count=0;
    a.forEach(element => {
        if(a[i]==element)
        {
            count++
        }
    });
    console.log(a[i]+" "+count);
}

