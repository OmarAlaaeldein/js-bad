function factorial(num) {
    if (num === 0 || num === 1) {
      return num;
    }
    return num * factorial(num - 1);
  }  
console.log(factorial(2)); // 40320

function power(a,b){
    if (b===1){
      return a
    }
    return a*mult(a,b-1)
  }
console.log(power(4,2))

function mult(a,b){
if (b===1){
  return a
}
return a+mult(a,b-1)
}
console.log(mult(4,2))
