var allLinks = document.getElementsByTagName('a');
for(var i = allLinks.length-1; i >=0  ; i--) {
	 (function () {
		var modal = allLinks[i].id + "_modal"
		allLinks[i].addEventListener("mouseenter", function() { 
			document.getElementById(modal).style.display = "block"; }, false)
		allLinks[i].addEventListener("mouseleave", function() { 
			document.getElementById(modal).style.display = "none"; }, false)
	}()); // immediate invocation
	}

var table = document.getElementById("code")
var inner = table.innerHTML
inner = inner.replace("RANDOM",getRandomInt(1000000000,10000000000))
table.innerHTML = inner
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}