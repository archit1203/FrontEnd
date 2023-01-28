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

// document.addEventListener("keyup",function(e){
//     console.log(e.key);
// })
document.addEventListener("keypress",function(e){
    console.log("keypress");
    console.log(e.key);
    if(e.key == 2){
        e.preventDefault();
    }
})
document.addEventListener("keyup",function(e){
    console.log("keyup");
    console.log(e.key);
    if(e.key == 2){
        e.preventDefault();
    }
})
document.addEventListener("keydown",function(e){
    console.log("keydown");
    console.log(e.key);
    if(e.key == 2){
        e.preventDefault();
    }
})