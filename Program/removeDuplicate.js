var s="Hi I am I Smitha Hi I am"
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
    if(count>=2){
        a.pop(a[i]);
        }
}
console.log(a);


