const para = document.createElement("p");
para.textContent="This is done using DOM API";
document.body.appendChild(para);

para.classList.add("one"); 
para.classList.add("two");
para.classList.remove("one"); 
para.setAttribute("id", "js-para");
console.log(para.getAttribute("id"));

const span = document.createElement("span")
span.id="span-id";
span.className="blue";
para.appendChild(span);
span.style.backgroundColor= "red"
span.textContent="This is span"; 
span.innerHTML="<br><strong>This is an inner example</strong>"; 

const hobbies=["Coding", "swimming","jogging"]; 
const list = document.createElement("ul");

for(let hobby of hobbies){
    list.innerHTML+="<li class='blue'>"+hobby+"</li>";
}

document.body.appendChild(list);



// Get the Elements
// console.log(document.getElementById("p1").textContent)
console.log(document.getElementsByClassName("blue"));
// console.log(document.querySelector("p"));
// Selector only gives first element encountered    
console.log(document.querySelectorAll("p"));
console.log(document.querySelector("#span-id"));
console.log(document.querySelector(".two"));



// let first=5;
// let second=10;
// function compare(first, second){
// if(first<second){
//     console.log(second+" is greater than "+first);
// }
// else if(first>second){
//     console.log(first+" is greater than "+second);
// }
// else{
//     console.log("Both are equal");
// }    
// }

// function print(){
//     console.log("Printing it");
// }

// function sum(f,s){
//     return f+s;
// }

// // anonymous function
// const subt= function(fn,sn){
//     return fn-sn;
// }

// print()
// res=sum(10,4);
// console.log(res);
// console.log(subt(3,5));
// compare(155,97);
// // compare(155,876);
// // compare(155,155);



// const person = {
//     fname:"archit",
//     lname:"Srivastava",
//     print: function(){
//         console.log("Hemlo");
//     }
// };

// person.print();







// // if(num1>num2){
// //     console.log(num2+" is greater than "+num1);
// // }
// // else if(num1>num2){
// //     console.log(num1+" is greater than "+num2);
// // }
// // else{
// //     console.log("Both are equal");
// // }