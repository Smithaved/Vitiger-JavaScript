var laptop=new Object()
laptop.brand="HP"
laptop.os="Windows 8.1"
laptop.configaration={ram:"6GB",systemType:"64 Bit",processor:"intel",supportedOs:["windows 7","windows 8"]}
laptop.cost=function(){return 50000}

console.log(laptop);
console.log(laptop.os);
console.log(laptop.configaration.ram);
console.log(laptop.configaration.supportedOs[1]);
console.log(laptop.cost());
