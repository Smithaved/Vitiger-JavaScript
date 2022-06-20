// var myself={
//     name:"Smitha S",
//     education:"MCA",
//     skillSet:["java","selenium","java script","Manual"],
//     message:function () {
//         return "Hi Everyone"
//     }
// }
// console.log(myself);
// console.log(myself.message());
// console.log(myself["education"]);

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

console.log(laptop);
console.log(laptop.cost());
console.log(laptop["configaration"]);
console.log(laptop.configaration.ram);
laptop.manufactureYear=2013;
console.log(laptop);
laptop.manufactureYear=2014;
console.log(laptop);
delete laptop.manufactureYear
console.log(laptop);
// laptop.supportedOs=["windows 7","windows 8"]
// console.log(laptop);
// console.log(laptop.supportedOs.push("windows 8.1"));
// console.log(laptop.supportedOs);
// console.log(laptop.supportedOs.indexOf("windows 8"));
// console.log(laptop.supportedOs[0]);

