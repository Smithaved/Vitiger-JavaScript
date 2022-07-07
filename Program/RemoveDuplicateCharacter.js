var s="chethan"
var ch=[]
var s2=""
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
    if(count>=2){
        ch.splice(ch[i]);
        }
    
}
ch.forEach(element => {
    s2=s2+element
});
console.log(s2);