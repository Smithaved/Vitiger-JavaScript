var info=[
    { fname:"abc",adress:"India"},
    { fname:"def",adress:"USA"},
    { fname:"ghi",adress:"Russia"},
    { fname:"jkl",adress:"Europe"},
    { fname:"mno",adress:"India"},
]
// console.log(info[0].adress);
var count=0
var a=[]
info.forEach(element => {
    if (element.adress=="USA") {
        count++
        countryName=element.adress
    }
    
    
});
console.log(`total number of ${countryName} residency is ${count}`);
a.push({countryName:count})
console.log(a);