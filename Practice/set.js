var s="I am Indian I am"
var a=s.split(" ")
var s2=""
var set =new Set()
a.map(element => {
    set.add(element)
});
console.log(set);
set.forEach(element =>{
    var count=0
    for (let index = 0; index < a.length; index++) {
        if(element==a[index])
        {
            count++
        }
    }
    console.log(element+"="+count)
})

//remove duplicate
set.forEach(element => {
    s2=s2+element+" "
})
console.log(s2);