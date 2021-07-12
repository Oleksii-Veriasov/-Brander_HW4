
let trigger = document.getElementById("trigger");
let result = document.getElementById("result");

trigger.addEventListener("click", function(){
    let n = document.getElementById("input").value;
    result.innerText = fib(n);
});
 
function fib(n){
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}