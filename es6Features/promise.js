// var pro=new Promise((resolve,reject)=>{
//     var a=10
//     var b=10.5
//     if(a==b)
//     {
//         resolve("a is equal to b")
//     }
//     else
//     {
//         reject("a is not equal to b")
//     }
// })
// pro.then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg);})

/********************************************************************************************/
async function sync() {
    console.log("Start");
    var p=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("in progress")
        }, 2000);
        
    })
    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    var p2=new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("not in progress")
        }, 3000);
    })
    await p2.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    console.log("end");
}
sync()