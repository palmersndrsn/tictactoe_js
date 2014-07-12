window.onload = function () {

//boxes
var one = document.getElementById("1")
var two = document.getElementById("2")
var three = document.getElementById("3")
var four = document.getElementById("4")
var five = document.getElementById("5")
var six = document.getElementById("6")
var seven = document.getElementById("7")
var eight = document.getElementById("8")
var nine = document.getElementById("9")

var count = 1
var ex = []
var zero = []


// clicking
var clicked = function (x) {
if (x.innerHTML === "") {
	if (count % 2 === 0) {
		count ++
		x.innerHTML = "X"
 		x.style.color = "red"
 		return ex 
	}
	else {
		count ++
 		x.innerHTML = "0"
 		x.style.color = "blue"
 		return zero
		}
	
	}
}
//Box Functions
one.onclick = function () {
	clicked(one);
}
two.onclick = function () {
	clicked(two);
}
three.onclick = function () {
	clicked(three);
}
four.onclick = function () {
	clicked(four);
}
five.onclick = function () {
	clicked(five);
}
six.onclick = function () {
	clicked(six);
}
seven.onclick = function () {
	clicked(seven);
}
eight.onclick = function () {
	clicked(eight);
}
nine.onclick = function () {
	clicked(nine);
}
console.log(zero)
console.log(ex)

}





//switch between users

