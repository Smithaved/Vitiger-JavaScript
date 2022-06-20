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
    print:function(a){
        console.log(company2.a);
        console.log(a);     
        this.a=20
        console.log(this.name);
        console.log(this.noOfEmployee);
        console.log(this.a);
        console.log(a);
    }
}
company2.print(10)
console.log(company2.a);
