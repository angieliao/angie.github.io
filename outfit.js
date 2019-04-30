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





let o1hidden = true;


function showo1() {
	if (o1hidden) {
		document.getElementById("o1").style.opacity = "1";
		o1hidden = false;
	}
	else {
		document.getElementById("o1").style.opacity = "0";
		o1hidden = true;
	}
}

let d1 = document.getElementById("d1");

d1.onclick = showo1;




let o2hidden = true;


function showo2() {
	if (o2hidden) {
		document.getElementById("o2").style.opacity = "1";
		o2hidden = false;
	}
	else {
		document.getElementById("o2").style.opacity = "0";
		o2hidden = true;
	}
}

let d2 = document.getElementById("d2");

d2.onclick = showo2;




let o3hidden = true;


function showo3() {
	if (o3hidden) {
		document.getElementById("o3").style.opacity = "1";
		o3hidden = false;
	}
	else {
		document.getElementById("o3").style.opacity = "0";
		o3hidden = true;
	}
}

let d3 = document.getElementById("d3");

d3.onclick = showo3;




let o4hidden = true;


function showo4() {
	if (o4hidden) {
		document.getElementById("o4").style.opacity = "1";
		o4hidden = false;
	}
	else {
		document.getElementById("o4").style.opacity = "0";
		o4hidden = true;
	}
}

let d4 = document.getElementById("d4");

d4.onclick = showo4;

