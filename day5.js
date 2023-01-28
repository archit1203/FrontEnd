// document.addEventListener("mouseover",function(){
//     console.log()
// })


// document.getElementById("clickMe").onclick = handleClick;
// document.getElementById("clickMe").addEventListener("click",function handleClick(){
//     alert("You've Clicked")
// }) ;

function handleMouseOver(){
    console.log(event);
}

document.getElementById("start").addEventListener("click",function handleClick(){
    document.addEventListener("mouseover",handleMouseOver)
}) ;

document.getElementById("stop").addEventListener("click",function handleClick(){
    document.removeEventListener("mouseover",handleMouseOver)
}) ;