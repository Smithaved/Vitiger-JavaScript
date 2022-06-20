var company={
    name:"Test yanthra",
    noOfEmployee:4000,
    print:function () {
        console.log(this.name);
        console.log(this.noOfEmployee);
    }
}
var company2={
    name:"Sony",
    noOfEmployee:5000,
    print1:function () {
        console.log(this.name);
        console.log(this.noOfEmployee);
    }
}
function message(message)
{
    console.log(message+" "+this.name);
    
}

var result=company.print.bind(company2)
result()

var result2=company2.print1.bind(company)
result2()

var result_message=message.bind(company,"Welcome")
result_message()

var result_message2=message.bind(company2,"Welcome")
result_message2()