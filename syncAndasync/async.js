console.log("Start");

setTimeout(() => {
    console.log("This is timeout1");
}, 3000);

setTimeout(() => {
    console.log("This is timeout2");
}, 1000);

setTimeout(() => {
    console.log("This is timeout3");
}, 5000);

console.log("End");