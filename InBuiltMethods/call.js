var company={
    name:"Test yanthra",
    noOfEmployee:4000,
    print:function () {
        console.log(this.name);
        console.log(this.noOfEmployee);
        this.print1.call(company)
    }
}
var company2={
    name:"Sony",
    noOfEmployee:5000,
    print1:function () {
        console.log(this.name);
        console.log(this.noOfEmployee);
        //this.print.call(company2)
    }
}
function message(message)
{
    console.log(message+" "+this.name);
    
}
// company.print.call(company2)
// company2.print1.call(company)
message.call(company,"Hello")
message.call(company2,"Hello")