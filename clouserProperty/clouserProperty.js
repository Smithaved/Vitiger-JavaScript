// var a=10
// var b=20
// function print(){
//     console.log(a);
//     var b=200
//     console.log(b);
// }print()

// var a=10
// var b=20
// function print(){
//     console.log(a);
//     var b=200
//     console.log(b);
//     function set(){
//         console.log(a);
//         var a=50
//     }set()
// }print()

function outer(a)
{
    return function inner(b) {
        return a+b
    }
}
var sum=outer(6)
console.log(sum(5));