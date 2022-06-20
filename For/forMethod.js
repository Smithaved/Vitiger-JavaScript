var arr=[10,,,40]
arr.forEach((element,index,arr)=>{
    console.log(arr[index]+" "+index);
})

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]+"  "+index);    
}

for (const index in arr) {
    console.log(arr[index]+"  "+index); 
}

for (const index of arr) {
    console.log(index); 
}
