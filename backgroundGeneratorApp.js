var h3 = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

// color1.addEventListener("input", function(){
//     body.style.background=`linear-gradient(to right, ${color1.value} , ${color2.value})` //changes the background-color of the body 
// });

// color2.addEventListener("input", function(){
//     body.style.background=`linear-gradient(to right, ${color1.value} , ${color2.value})` //changes the background-color of the body 
// });


function setGradient(){
    body.style.background=`linear-gradient(to right, ${color1.value} , ${color2.value})`; //changes the background-color of the body
    h3.textContent = body.style.background + ";"; //displays the css properties
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//when writing code always remember the dont repeat yourself principle