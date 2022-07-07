var arr=[3,"java",true,undefined]
var num=[1,2,3,4]
// console.log(arr.length);
/*array.concat(number[])
It combines 2 or more array this method returns a new array without modifying any existing arrays*/
// console.log(arr.concat(num));

// /*array.push(elements)
// it will add the given elements at the end of an array 
// and returns the length of an array and it will modify the existing array*/
// console.log(arr.push(20)); 
// console.log(arr); 

// /*array.pop()
// it will remove the last element from the array 
// and returns the removed element, it will modifies the existing array
// */
// console.log(arr.pop(20)); 
// console.log(arr);

// /*array.unshift(element)
// it will add the element to the beginning of an array and returns the length of an array, 
// it will modify the existing array*/ 
// console.log(arr.unshift(20));
// console.log(arr);

// /*array.shift()
// it will remove the first element of the array and returns the removed element, 
// it will modify the existing array */
// console.log(arr.shift(20));
// console.log(arr); 

// /*array.splice(startindex ,deletCount ,new element)
// it will delete and as well as adds the given element to the specific index of an array 
// and returns the deleted elements in the form of an array. 
// It will modify the existing array */
// console.log(arr.splice(2,1,5));
// console.log(arr);

// /*array.slice(startIndex,endIndex)
// it will return the fragment of an array based on the specified index and endIndex will be excluded, 
// returns the fragment in the form of an array*/
// console.log(num.slice(2,4));
// console.log(num);

// /*array.indexOf(searchElement,startPosition)
// it will return index value of the search element,traversing from left to right */
// console.log(arr.indexOf('java',0));

// /*array.lastIndexOf(searchElement,startPosition)
// it will return the index value of search element, traversing from right to left */
// console.log(arr.lastIndexOf('java',0));

// /*array.reverse()
// it will return the array in reverse order, it modifies the existing array */
// console.log(arr);
// console.log(arr.reverse());

// /*array.includes(searchElement)
// it will return the Boolean result based on the search element presence */
// console.log(arr.includes(5));
// console.log(arr.includes(15));

// /*array.join(join_character)
// it will add the element of an array based on the charter specified and returns the string*/
// console.log(arr.join(2));

// /*array.every(()=>{})
// it will return Boolean result based on the condition satisfied by all the elements of an array 
// i.e. returns true only if all the elements satisfies the given conditions */
// console.log(arr);
// var sum
// console.log(arr.every(sum=(a,b)=>{return a+b },sum(1,2)));

// /*array.some(()=>{})
// it will return Boolean result based on the condition satisfied by any one of the element of an array 
// i.e. returns true if any of the element satisfies the condition */
// console.log(arr);
// var sum1
// console.log(arr.some(sum1=(a,b)=>{return a+b },sum1(1,2)));

// /*array.sort(()=>{//compare function})
// it will sort the array in ascending order(return a-b)
// /descending order(return b-a)based on return specified in compare function */
// console.log(num);
// console.log(num.sort((a,b)=>{return b-a}));
// console.log(num.sort((a,b)=>{return a-b}));

// /*array.forEach(()=>{})
// it will perform the task given in the call back function and returns void. 
// Implemented by map method of an array, but it will not modify the existing array */
// console.log(num);
// num.forEach((element,index)=>{
    
//         console.log(num[index]);
// })


/*array.map(()=>{//modifiy statements})
it will return the modified form of an array and implemented by filter method of an array,
but it will not modify the existing array */
// console.log(num);
// console.log(num.map((a)=>{return a+2}))
// console.log(num);

/*array.filter(()=>{//filter condition})
it will return the array based on filter condition i.e. it will return the elements 
in the form of array that only satisfies the given filter condition, 
it will not modify the existing array */
console.log(num);
console.log(num.filter((a)=>{if(a>4) return b}));
console.log(num);

// /*array.reduce((previousValue, currentValue)=>{})
// it will reduce the entire array into a single unit/ to the required form(array,object,number) */
// console.log(num);
// console.log(num.reduce((a,b)=>{return a+b}));

// /*array.reduceRight(((previousValue, currentValue)=>{})
// similar to reduce method but traversing is from right to left */
// console.log(num);
// console.log(num.reduceRight((a,b)=>{return b-a}));
