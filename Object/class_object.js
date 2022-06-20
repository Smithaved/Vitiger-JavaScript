class laptop
{
    constructor(brand,os,cost,configaration,supportedOs)
    {
        this.brand=brand;
        this.os=os;
        this.cost=function(){
            return cost
        }
        this.configaration=configaration;
        this.supportedOs=supportedOs;
    }
}

var laptop_detail=new laptop("HP","Windows 8.1",50000,{ram:"6GB",syatemType:"64Bit",processor:"intel"},["Windows 7","Windows 8"])
console.log(laptop_detail);
console.log(laptop_detail.cost(5000));