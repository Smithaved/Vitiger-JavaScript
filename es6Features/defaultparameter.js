/***********Case 1*************/
// function add(a,b) {
//     console.log(a+b);
// }
// add(10,8)//18
// add(10)//nan
/***********Case 2*************/
// function add(a,b=2) {
//     console.log(a+b);
// }
// add(10,8)//18
// add(10)//12
/***********Case 3*************/
// class add{
//     constructor(a,b)
//     {
//         console.log(a+b);
//     }
// }
// var add_number=new add(10)//nan
// var add_number1=new add(10,20)//30
/***********Case 4*************/
class add{
    constructor(a,b=50)
    {
        console.log(a+b);
    }
}
var add_number=new add(10)//60
var add_number1=new add(10,20)//30
