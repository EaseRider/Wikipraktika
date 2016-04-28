/**
 * core
 */




/**
 * UI
 */
window.addEventListener('load', function() {

	document.getElementById("key-c").addEventListener("click", function(){
		document.getElementById("input").innerHTML = "";
		document.getElementById("output").innerHTML = "";
	});

	 /* Operators */

	document.getElementById("key-+").addEventListener("click", function(){
		if(document.getElementById("input").innerHTML != ""){
			document.getElementById("output").innerHTML = document.getElementById("input").value + " + ";
			document.getElementById("input").innerHTML = "";

		}else{
			document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + " + ";
		}
	});

	document.getElementById("key--").addEventListener("click", function(){
		if(document.getElementById("input").innerHTML != ""){
			document.getElementById("output").innerHTML = document.getElementById("input").value + " - ";
			document.getElementById("input").innerHTML = "";
		}else{
			document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "-";
		}
	});

	document.getElementById("key-*").addEventListener("click", function(){
		if(document.getElementById("input").innerHTML != ""){
			document.getElementById("output").innerHTML = document.getElementById("input").value + " * ";
			document.getElementById("input").innerHTML = "";

		}else{
			document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "*";
		}
	});

	document.getElementById("key-/").addEventListener("click", function(){
		if(document.getElementById("input").innerHTML != ""){
			document.getElementById("output").innerHTML = document.getElementById("input").value + " / ";
			document.getElementById("input").innerHTML = "";

		}else{
			document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "/";
		}
	});

	document.getElementById("key-=").addEventListener("click", function(){

		if(document.getElementById("output").value.indexOf("+") !== -1)
		{
			document.getElementById("input").innerHTML = parseInt(document.getElementById("output").value.replace("+", "")) + parseInt(document.getElementById("input").value);
			document.getElementById("output").innerHTML = "";
		}

		if(document.getElementById("output").value.indexOf("-") !== -1)
		{
			document.getElementById("input").innerHTML = parseInt(document.getElementById("output").value.replace("-", "")) - parseInt(document.getElementById("input").value);
			document.getElementById("output").innerHTML = "";
		}

		if(document.getElementById("output").value.indexOf("*") !== -1)
		{
			document.getElementById("input").innerHTML = parseInt(document.getElementById("output").value.replace("*", "")) * parseInt(document.getElementById("input").value);
			document.getElementById("output").innerHTML = "";
		}

		if(document.getElementById("output").value.indexOf("/") !== -1)
		{
			document.getElementById("input").innerHTML = parseInt(document.getElementById("output").value.replace("/", "")) / parseInt(document.getElementById("input").value);
			document.getElementById("output").innerHTML = "";
		}

	});

	/* Keys */

	document.getElementById("key-0").addEventListener("click", function() {
		if(document.getElementById("input").innerHTML > 0){
			document.getElementById("input").innerHTML =  document.getElementById("input").innerHTML + 0;
		}else{
			document.getElementById("input").innerHTML = 0;
		}

	});

	document.getElementById("key-1").addEventListener("click", function() {
		if(document.getElementById("input").innerHTML == 0){
			document.getElementById("input").innerHTML = 1;
		}else{
			document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + 1;
		}
	});

	document.getElementById("key-2").addEventListener("click", function() {
		if(document.getElementById("input").innerHTML == 0){
			document.getElementById("input").innerHTML = 2;
		}else{
			document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + 2;
		}
	});

	document.getElementById("key-3").addEventListener("click", function() {
		if(document.getElementById("input").innerHTML == 0){
			document.getElementById("input").innerHTML = 3;
		}else{
			document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + 3;
		}
	});

	document.getElementById("key-4").addEventListener("click", function() {
		if(document.getElementById("input").innerHTML == 0){
			document.getElementById("input").innerHTML = 4;
		}else{
			document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + 4;
		}
	});

	document.getElementById("key-5").addEventListener("click", function() {
		if(document.getElementById("input").innerHTML == 0){
			document.getElementById("input").innerHTML = 5;
		}else{
			document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + 5;
		}
	});

	document.getElementById("key-6").addEventListener("click", function() {
		if(document.getElementById("input").innerHTML == 0){
			document.getElementById("input").innerHTML = 6;
		}else{
			document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + 6;
		}
	});

	document.getElementById("key-7").addEventListener("click", function() {
		if(document.getElementById("input").innerHTML == 0){
			document.getElementById("input").innerHTML = 7;
		}else{
			document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + 7;
		}
	});

	document.getElementById("key-8").addEventListener("click", function() {
		if(document.getElementById("input").innerHTML == 0){
			document.getElementById("input").innerHTML = 8;
		}else{
			document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + 8;
		}
	});

	document.getElementById("key-9").addEventListener("click", function() {
		if(document.getElementById("input").innerHTML == 0){
			document.getElementById("input").innerHTML = 9;
		}else{
			document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + 9;
		}
	});

});