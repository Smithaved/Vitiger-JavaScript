class company{
    constructor(company_name,location)
    {
        this.company_name=company_name
        this.location=location
    }
    noOfEmployees=5000
    static timing="9-6"
    display(){
        console.log(this.company_name);
        console.log(this.timing);
        console.log(this.noOfEmployees);
        console.log(company.timing);
    }
    static display1(){
        console.log(this.company_name);
        console.log(this.timing);
        console.log(company.timing);
        var c=new company("Usha","katergupee")
        console.log(c.noOfEmployees);
    }

    static sample1(c)
    {
        //this.display1()
        c.display()
    }

    sample2()
    {
        //this.display()
        company.display1()
    }
}
var c1=new company("Test Yantra","katergupee")
console.log(c1.company_name);
console.log(c1.noOfEmployees);
console.log(company.timing);
 var c2=new company("Usha","katergupee")
console.log(c2.location);
console.log(c2.noOfEmployees);
console.log(company.timing);
console.log(c2);
c1.display()
company.display1(c2)
 company.sample1(c1);
c2.sample2()