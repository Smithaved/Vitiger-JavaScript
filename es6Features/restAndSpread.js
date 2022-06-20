/********************** REST PARAMETER **************************/
// function print(a,b,c,...d)
// {
//     console.log(a,b,c,d);
// }
// print(10,2.4,5,6,20,30,32)

/********************** SPREAD PARAMETER **************************/
/****Array****/
// var num1=[10,20,30,49]
// var num2=[10,50,45]
// var num=[...num1,...num2]
// console.log(num);

// var num=[...num1,65,34,54]
// console.log(num);

/*********OBJECT**********/
var personaldetail={
    f_name:"Smitha",
    l_name:"S",
    salary:20000
}
var officialdetail={
    email:"smitha@gmail.com",
    company:"TestYantra",
    salary:30000
}
/*******Case1*******/
var obj={...personaldetail}
console.log(obj);

/***********Case2 combining the objects*************/
var obj1={...officialdetail,...personaldetail}
console.log(obj1);