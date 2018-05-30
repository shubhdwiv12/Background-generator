var css= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var doc= document.getElementById("gradient");

function setGradient(){
	doc.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
	css.textContent= doc.style.background+";"
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

