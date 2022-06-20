function laptop(brand,os,cost,configaration,supportedOs)
{
    this.brand=brand
    this.os=os
    this.cost=function(){return cost}
    this.configaration=configaration
    this.supportedOs=supportedOs
}
var laptop=new laptop("HP","Windows 8.1",50000,{ram:"6GB",systemType:"64 Bit",processor:"intel"},["windows 7","windows 8"])
console.log(laptop);
console.log(laptop.cost());
console.log(laptop.configaration);
console.log(laptop.supportedOs);