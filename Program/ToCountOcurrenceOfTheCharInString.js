var s="chethan"
var ch=[]
for (var i = 0; i < s.length; i++) {
    ch[i]=s.charAt(i)
}
for(var i=0;i<ch.length;i++)
{
    var count=0;
    ch.forEach(element => {
        if(ch[i]==element)
        {
            count++
        }
    });
    console.log(ch[i]+" "+count);
}