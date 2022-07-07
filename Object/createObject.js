var laptop={
    brand:"HP",
    os:"Windows 8.1",
    configaration:{
        ram:"6GB",
        systemType:"64 bit",
        processor:"intel"
    },
    cost:function () {
        return 50000;
    }
}
var laptop1=Object.create(laptop)
laptop1.__proto__=laptop
laptop1.os="Windows 7"
laptop1.brand="Dell"
// console.log(laptop);
console.log(laptop1);
console.log(laptop1.configaration);
console.log(laptop1.cost());