//////// JavaScript Document


var count=0;
function counter(){
	count=count + 1;
	document.getElementById("totalItems").innerHTML=count;
	noItems();
}
function noItems(){
	if(document.getElementById("totalItems").innerHTML==0){
		document.getElementById("circle").style.display="none";
	}
	else{
		document.getElementById("circle").style.display="block";
	}
}

window.onload = noItems();
