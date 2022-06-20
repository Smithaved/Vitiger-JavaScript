// ---Access static variable
// ---Access non-static variable
// ---invoke static method
// ---invoke non-static method
// ---Access static variable inside static method
// ---Access static variable inside non-static method
// ---Access non-static variable inside static method
// ---Access non-static variable inside non-static method
// ---Access static method inside static method
// ---Access non-static method inside static method
// ---Access static method inside non-static method
// ---Access non-static method inside non-static method

// class laptop{
// 	constructor(brand,cost)
// 	{
// 		this.brand=brand
// 		this.cost=cost
// 	}
// 	 os="Windows 8"
// 	static ram="6GB"
// 	detail1()
// 	{
// 		console.log(this.os)
// 		console.log(laptop.ram)
// 	}
// 	static detail2()
// 	{
// 		console.log(this.ram)
// 		var l1=new laptop("Dell",50000)
// 		console.log(l1.os)
// 	}
// 	sample1()
// 	{
// 		this.detail1()
// 		laptop.detail2()
// 	}
// 	static sample2(lap)
// 	{
// 		this.detail2()
// 		lap.detail1()
// 	}
// }
// console.log(this.os)
// console.log(laptop.ram)
// var lap_detail=new laptop("HP",50000)
// lap_detail.detail1()
// laptop.detail2()
// lap_detail.sample1()
// laptop.sample2(lap_detail)

/******************************************************************************************************************/
// Array de-structuring
// var arr=[10,2,34,56]
// /*****case1*****/
// var x=arr[2]
// var y=arr[4]
// console.log(x,y)  //2 56
// /*****case2*****/
// var [x,y]=arr
// console.log(x,y)//10 2
// /*****case3*****/
// var [x,y,z]=arr
// console.log(x,y,z)//10 2 34
// /*****case4*****/
// var [x,,y,]=arr
// console.log(x,y)//10 34


/******************************************************************************************************************/
var laptop={brand:"HP",cost:50000}
/****Case1****/
var brand=laptop.brand
var cost=laptop.cost
console.log(brand,cost)	//HP 50000
/****Case2****/
var {brand,cost}=laptop
console.log(brand,cost)	//HP 50000
/****Case3****/
let {brand : brandname}=laptop
console.log(brandname)	//HP 
console.log(brand) //brand undefined

