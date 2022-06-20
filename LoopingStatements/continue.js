var arr =[3,'java',false]
for (let index = 0; index < arr.length; index++) {
    if (index<2) {
        console.log("Hello");
        continue
        console.log("Hi");
    }
    console.log(arr[index]);
}