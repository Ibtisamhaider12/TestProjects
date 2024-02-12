let a=10;
let b=2;

// Promise Method
let data = new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve(300)
     },1500);
})


data.then((item)=>{
    b=item;
    console.log(a+item);
})