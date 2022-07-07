let importClass=require("./class")
console.log(importClass.a);//34
class Class3 
{
    constructor(a,b,c,d,e,f,h)
    {
        // super(a,b,c,d,e,f)
        importClass.a=f
        importClass.b=e
        importClass.c=d
        importClass.d=c
        importClass.e=b
        importClass.f=a
        this.h=h
    }
    display3(){
        console.log(importClass.a);//60
    }
}
var c=new Class3(10,20,30,40,50,60,70)
c.display3()