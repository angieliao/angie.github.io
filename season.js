function showseason() {
	document.getElementById("season").style.display = "block";
}

function hideseason() {
	document.getElementById("season").style.display = "none";
}

let item_one = document.getElementById("item1");

item_one.onmouseover = showseason;
item_one.onmouseout = hideseason;




function showcloset() {
	document.getElementById("closet").style.display = "block";
}

function hidecloset() {
	document.getElementById("closet").style.display = "none";
}

let item_two = document.getElementById("item2");

item_two.onmouseover = showcloset;
item_two.onmouseout = hidecloset;