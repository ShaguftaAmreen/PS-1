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

function swap(a,b){
    let c;
    c=a;
    a=b;
    b=c;
    console.log(a,b)
}

swap(10,20)


function fact(num){

    let factV=1;
    for(let i=1;i<=num;i++){
        factV=factV*i;
    }

    console.log(factV)

}

fact(5);

let num=234;
let sum=0;
while(num>0){
    let rev=num%10;
    sum=sum*10+rev;
    num=Math.floor(num/10)
}

console.log("num=",sum);

let lt=10; let ut=20;

for(let i=lt;i<=ut;i++){
    document.write(i);
    document.write("<br />");
}
//////////////////
let ar=9;
let f=1;

for(let i=2;i<=ar;i++){
    if(ar%i==0){
        f++;
    }
}

if(f==2){
    console.log(`${ar} is a prime number`)
}
else{
    console.log(`${ar} is not prime number`)
}
///////////////

let A=10; let B=5; let C=25;
if(A>B){
    if(A>C){
        console.log(`${A} a is greatest`)
    }
    else{
        console.log(`${C} c is greatest`)
    }
}
else{
    if(B>C){
                console.log(`${B} is b greatest`)

    }    
    else{
                console.log(`${C} c is greatest`)

    }
}

let aa=10;
let bb=20;
let cc=58;

let k=(aa>bb?(aa>cc?aa:cc):(bb>cc?bb:cc))

console.log("KKK",k); 

/////////////////////////////////////////////////////

function calAverage(students) {

return students.map((student)=>{
            let avg=0

    if(student.notes.length>0){
        let total = student.notes.reduce((acc,note)=>{
         acc+=note
         return acc
        },0)
        avg=total/student.notes.length;
        
    }
    return avg
})

}

let students = [
  { name: "John", notes: [3, 5, 4] },
  { name: "Alice", notes: [] }
];

let result = calAverage(students);

console.log(result);