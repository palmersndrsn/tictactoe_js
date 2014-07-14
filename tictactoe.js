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

var playerX = document.getElementById("player1")
var playerO = document.getElementById("player2")

var resetButton = document.getElementById("button")
var allBoxes = document.getElementsByClassName("box")

var count = 1
var blank = 0

//Reset (Tried for loop, while loop, and some other stuff. Why does only the for in loop work?)
var reset = function (y) {
	for (blank in allBoxes) {
		y[blank].innerHTML = "";
		playerX.innerHTML = "X";
 		playerO.innerHTML = "";
		blank++;
		count = 1;
		}
}

// clicking
var clicked = function (x) {
if (x.innerHTML === "") {
	if (count % 2 === 0) {
		count ++;
 		playerX.innerHTML = "X";
 		playerO.innerHTML = "";
		x.innerHTML = "O";
 		x.style.color = "blue";
		}
	else {
		count ++;
 		playerO.innerHTML = "O";
 		playerX.innerHTML = "";
 		x.innerHTML = "X";
 		x.style.color = "red";
		};
	};
};
//Possible switch for winner function (derp)

//Reset Button
resetButton.onclick = function () {
	reset(allBoxes);
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

}





//switch between users

