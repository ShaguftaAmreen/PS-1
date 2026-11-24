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

//////////////////////////////////////

let arr = [64, 25, 12, 22, 11];

for (let i = 0; i < arr.length - 1; i++) {

    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

console.log(arr);

//////////////////////////////////

function quickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] < pivot) {
            left.push(arr[i]);
        } 
        else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr2 = [10, 7, 8, 9, 1, 5];

console.log(quickSort(arr2)); 

//////////////////////////////////////

let arr3 = [64, 25, 12, 22, 11];

for (let i = 0; i < arr3.length - 1; i++) {

    for (let j = 0; j < arr3.length - 1 - i; j++) {

        if (arr3[j] > arr3[j + 1]) {

            let temp = arr3[j];
            arr3[j] = arr3[j + 1];
            arr3[j + 1] = temp;

        }
    }
}

console.log(arr3);

/////////////////////////////

let arr4 = [10, 20, 30, 40, 50, 60, 70, 80];

let target = 50;

let low = 0;
let high = arr4.length - 1;

let found = false;

while (low <= high) {

    let mid = Math.floor((low + high) / 2);

    if (arr4[mid] === target) {
        console.log(`Element found at index ${mid}`);
        found = true;
        break;
    }
    else if (arr4[mid] < target) {
        low = mid + 1;
    }
    else {
        high = mid - 1;
    }
}

if (!found) {
    console.log("Element not found");
}

///////////////////////

let array = [64, 25, 12, 22, 11];

for (let i = 0; i < array.length - 1; i++) {

    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {

        if (array[j] < array[minIndex]) {
            minIndex = j;
        }
    }

    // Swap elements
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
}

console.log(array);


console.log(array[4]); 


function longestPalindrome(str) {
  let longest = "";

  function expand(left, right) {
    while (
      left >= 0 &&
      right < str.length &&
      str[left] === str[right]
    ) {
      left--;
      right++;
    }

    return str.substring(left + 1, right);
  }

  for (let i = 0; i < str.length; i++) {
    // Odd length palindrome
    let odd = expand(i, i);

    // Even length palindrome
    let even = expand(i, i + 1);

    if (odd.length > longest.length) {
      longest = odd;
    }

    if (even.length > longest.length) {
      longest = even;
    }
  }

  return longest;
}

console.log(longestPalindrome("babad")); // bab
console.log(longestPalindrome("cbbd"));  // bb
console.log(longestPalindrome("racecar")); // racecar
