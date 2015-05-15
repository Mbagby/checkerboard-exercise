// Your JS goes here

var checkerBoard = function(){
for (var i= 0; i < 63; i++){
		if (i % 2 === 0){
			var color = "black";
		} else {
			var color = "red";
		}

	var newDiv =document.createElement("div");
	newDiv.setAttribute("class", "checker");
	newDiv.style.width= "11.1%";
	newDiv.style.height= "11.1%"
	//newDiv.style.borderRadius = "30%";
	newDiv.style.float = "left";
	newDiv.style.paddingBottom = "11.1%";
	newDiv.style.backgroundColor = color
	document.body.appendChild(newDiv)
};
};
checkerBoard();


var randomColors = function(){
for (var i= 0; i < 63; i++){
	var color = 
	var newDiv =document.createElement("div");
	newDiv.setAttribute("class", "random");
	newDiv.style.width= "11.1%";
	newDiv.style.height= "11.1%"
	newDiv.style.borderRadius = "30%";
	newDiv.style.float = "left";
	newDiv.style.paddingBottom = "11.1%";
	newDiv.style.backgroundColor = color
	document.body.appendChild(newDiv)
};
};
checkerBoard();




