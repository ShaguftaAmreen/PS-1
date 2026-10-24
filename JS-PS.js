console.log("Hello")

function fun(){
    let a=Array.from(arguments);
    console.log("aaaa",a);
}

fun(10,20,30,40,50);

function fun2(min){
    console.log(min*60);
}

fun2(5);