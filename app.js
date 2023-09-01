var inputYear = document.querySelector("#input-year");
var btnCheck = document.querySelector("#btn-check");
var outputLeapYear = document.querySelector("#output");

// console.log(inputYear);
btnCheck.addEventListener("click", clickHandeler);

var num = inputYear.value;
function clickHandeler(num) {
    if( (num%400 === 0) || (num%100 != 0) & (num%4 === 0))
    {
        outputLeapYear.innerText = "Yes it's a leap year";
    }
    else{
        outputLeapYear.innerText = "No it's not a leap year";
    }
}