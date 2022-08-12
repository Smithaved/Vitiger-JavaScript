var s="mahabarath"
var s1=s
for (let index = 0; index < s.length; index++) {
    if(s.charAt(index)=="a")
    {
        s1=s1.replaceAll(s1.charAt(index),"*")
    }
    if(s.charAt(index)=="h")
    {
        s1=s1.replaceAll(s1.charAt(index),"@")
    }
}
console.log(s1);