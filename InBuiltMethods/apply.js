var company={
    name:"Test Yantra",
    noofemployees:4000,
    print:function () {
        console.log(this.name);
        console.log(this.noofemployees);
    }
}
var company2={
    name:"Sony",
    noofemployees:5000,
    print1:function () {
        console.log(this.name);
        console.log(this.noofemployees);
    }
}
function message(message1,message2) {
    console.log(message1+" "+this.name+" "+message2);
}
company.print.apply(company2)
company2.print1.apply(company)
message.apply(company,["Hi","Welcome"])
message.apply(company2,["Hi","Welcome"])