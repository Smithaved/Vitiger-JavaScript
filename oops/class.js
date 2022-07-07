class Class1{
    constructor(a,b,c)
    {
        this.a=a
        this.b=b
        this.c=c
    }
    display()
    {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }
}

class Class2 extends Class1
{
    constructor(a,b,c,d,e,f)
    {
        super(d,e,f)
        this.d=d
        this.e=e
        this.f=f
    }
    display1()
    {
        super.display()
    }
}
var cl=new Class2(10,20,30,34,40,30)
// cl.display1()
module.exports=cl
