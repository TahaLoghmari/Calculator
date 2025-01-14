let btns = document.querySelectorAll(".classic");
let CurrentNumber = document.querySelector(".CurrentNumber");
let CurrentOperation = document.querySelector(".CurrentOperation");
let backSpace = document.querySelector(".delete");
let reset = document.querySelector(".AC");
let result = document.querySelector(".equal");
let num = "" ;
btns.forEach( btn => btn.addEventListener("click", (e) => {
    num += e.target.innerHTML ; 
    CurrentNumber.innerHTML = num ; 
}))
backSpace.addEventListener("click",(e) => 
{
    num = num.slice(0,-1);
    CurrentNumber.innerHTML = ( num != "" ? num : 0 ) ;
})
reset.addEventListener("click",(e) =>
{
    CurrentNumber.innerHTML = "0";
    CurrentOperation.innerHTML = "";
    num = "";
    total = 0 ; 
})
result.addEventListener("click",() => 
{
    CurrentOperation.innerHTML = CurrentNumber.innerHTML ; 
    let n = num.length , i = 0 ; 
    let numbers = [] , operations = [] , track = "" ; 
    while ( i < n ) 
    {
        track += num[i];
        let j = i + 1 ; 
        while ( num[j] >= "0" && num[j] <= "9" ) track += num[j] , j++ ; 
        numbers.push(parseInt(track,10)) ; 
        operations.push(num[j]);
        i = j + 1 ; 
        track = "" ; 
    }
    let result = numbers[0] ; 
    for ( let i = 0 ; i < operations.length ; ++i ) 
    {
        if ( operations[i] === "+" ) result += numbers[i+1] ; 
        else if ( operations[i] === "-" ) result -= numbers[i+1] ; 
        else if ( operations[i] === "*" ) result *= numbers[i+1] ; 
        else if ( operations[i] === "/" ) result /= numbers[i+1] ; 
        else if ( operations[i] === "%" ) result %= numbers[i+1] ; 
    }
    CurrentNumber.innerHTML = result ; 
    num = result ; 
})
