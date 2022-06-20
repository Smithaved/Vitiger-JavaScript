var laptop={ brand:"HP",cost:50000}
/*Case1 */
// var brand=laptop.brand
// var cost=laptop.cost
// console.log(brand,cost);
/*Case2 */
// var {brand,cost}=laptop
// console.log(brand,cost);
/*Case3*/
var {brand: barndName}=laptop
console.log(barndName);
console.log(brand);