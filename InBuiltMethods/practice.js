var car1={
	name:"Swift",
	cost:600000,
	cardetail1:function (){
	console.log(this.name)
	console.log(this.cost)
	}
}
var car2={
	name:"Nano",
	cost:200000,
	cardetail2:function (){
	console.log(this.name)
	console.log(this.cost)
	}
}

function onRoad(message1,message2)
{
	console.log(message1+" "+this.name+" "+message2+" "+this.cost)
}

car1.cardetail1.call(car2)
car2.cardetail2.call(car1)
onRoad.call(car1,"The value of","is")
onRoad.call(car2,"The value of","is")
/*output
Nano
200000
Swift
600000
The value of Swift is 600000
The value of Nano is 200000
*/
console.log("/***********************************************************************/");
var detail1=car1.cardetail1.bind(car2)
detail1()
var detail2=car2.cardetail2.bind(car1)
detail2()
var detail3=onRoad.bind(car1,"The value of","is")
detail3()
var detail4=onRoad.bind(car2,"The value of","is")
detail4()
/*output
Nano
200000
Swift
600000
The value of Swift is 600000
The value of Nano is 200000
*/
console.log("/*************************************************************************/");
car1.cardetail1.apply(car2)
car2.cardetail2.apply(car1)
onRoad.apply(car1,["The value of","is"])
onRoad.apply(car2,["The value of","is"])
/*output
Nano
200000
Swift
600000
The value of Swift is 600000
The value of Nano is 200000
*/


