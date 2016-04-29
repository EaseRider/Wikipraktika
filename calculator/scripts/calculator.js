/**
 * core
 */

function add(n1,n2){

	if(isNaN(n1) || isNaN(n2) || typeof(n1) == "undefined" || typeof(n2) == "undefined"){
		return "Invalid Calculation!";
	}

	return n1 + n2;
}

function subtract(n1,n2){

	if(isNaN(n1) || isNaN(n2) || typeof(n1) == "undefined" || typeof(n2) == "undefined"){
		return "Invalid Calculation!";
	}

	return n1 - n2;
}

function multiply(n1,n2){

	if(isNaN(n1) || isNaN(n2) || typeof(n1) == "undefined" || typeof(n2) == "undefined"){
		return "Invalid Calculation!";
	}

	return n1 * n2;
}

function divide(n1,n2){

	console.log("n1: " + n1);
	console.log("n2: " + n2);
	if(isNaN(n1) || isNaN(n2) || typeof(n1) == "undefined" || n2 == 0 || typeof(n2) == "undefined"){
		return "Invalid Calculation!";
	}

	return n1 / n2;
}

function replaceOperator(string,operatorToReplace,newOperator){

	return string.value.replace(operatorToReplace,newOperator);
}

function checkOperatorInOutput(text){

	if(text.indexOf("+") == -1 && text.indexOf("/") == -1 && text.indexOf("*") == -1 && text.indexOf("-") == -1  ){
		return true;
	}
	return false;
}

/**
 * UI
 */
window.addEventListener('load', function() {
	var number1;
	var number2;
	var operator;
	var changeOperator;

	document.getElementById("key-c").addEventListener("click", function(){
		document.getElementById("input").innerHTML = "";
		document.getElementById("output").innerHTML = "";
		number1 = undefined;
		number2 = undefined;
	});

	 /* Operators */

	document.getElementById("key-+").addEventListener("click", function(){

		if(document.getElementById("input").value != "" && document.getElementById("output").value != ""){
			number1 = document.getElementById("output").value.toString();
			number2 = document.getElementById("input").value;

			switch (number1) {
				case "-":
					number1 = replaceOperator(number1,"-","+");
					break;
				case "*":
					number1 = replaceOperator(number1,"*","+");
					break;
				case "/":
					number1 = replaceOperator(number1,"/","+");
					break;
			}

			number1 = parseInt(number1);
			number2 = parseInt(number2);

			document.getElementById("output").innerHTML = number1 + " " + "+" + " ";
			document.getElementById("input").innerHTML = number2;
			operator = "+";
			changeOperator = true;
		} else if(document.getElementById("input").innerHTML != ""){
			number1 = document.getElementById("input").value;
			document.getElementById("output").innerHTML = number1 + " " + "+" + " ";
			document.getElementById("input").innerHTML = "";
			number1 = parseInt(number1);
			operator = "+";
		} else{
			if(checkOperatorInOutput(document.getElementById("output").value.toString()) || document.getElementById("output").value.length == 0){
				document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + " + ";
			}
			operator = "+";
		}
	});

	document.getElementById("key--").addEventListener("click", function(){
		if(document.getElementById("input").value != "" && document.getElementById("output").value != ""){
			number1 = document.getElementById("output").value.toString();
			number2 = document.getElementById("input").value;

			switch (number1) {
				case "+":
					number1 = replaceOperator(number1,"+","-");
					break;
				case "*":
					number1 = replaceOperator(number1,"*","-");
					break;
				case "/":
					number1 = replaceOperator(number1,"/","-");
					break;
			}

			number1 = parseInt(number1);
			number2 = parseInt(number2);

			document.getElementById("output").innerHTML = number1 + " " + "-" + " ";
			document.getElementById("input").innerHTML = number2;
			operator = "-";
			changeOperator = true;
		} else if(document.getElementById("input").innerHTML != ""){
			number1 = document.getElementById("input").value;
			document.getElementById("output").innerHTML = number1 + " - ";
			document.getElementById("input").innerHTML = "";
			operator = "-";
		}else{
			if(checkOperatorInOutput(document.getElementById("output").value.toString()) || document.getElementById("output").value.length == 0) {
				document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "-";
			}
			operator = "-";
		}
	});

	document.getElementById("key-*").addEventListener("click", function(){
		if(document.getElementById("input").value != "" && document.getElementById("output").value != ""){
			number1 = document.getElementById("output").value.toString();
			number2 = document.getElementById("input").value;

			switch (number1) {
				case "+":
					number1 = replaceOperator(number1,"+","*");
					break;
				case "-":
					number1 = replaceOperator(number1,"-","*");
					break;
				case "/":
					number1 = replaceOperator(number1,"/","*");
					break;
			}

			number1 = parseInt(number1);
			number2 = parseInt(number2);

			document.getElementById("output").innerHTML = number1 + " " + "*" + " ";
			document.getElementById("input").innerHTML = number2;
			operator = "*";
			changeOperator = true;
		} else if(document.getElementById("input").innerHTML != ""){
			number1 = document.getElementById("input").value;
			document.getElementById("output").innerHTML = document.getElementById("input").value + " * ";
			document.getElementById("input").innerHTML = "";
			operator = "*";
		}else{
			if(checkOperatorInOutput(document.getElementById("output").value.toString()) || document.getElementById("output").value.length == 0) {
				document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "*";
			}
			operator = "*";
		}
	});

	document.getElementById("key-/").addEventListener("click", function(){
		if(document.getElementById("input").value != "" && document.getElementById("output").value != ""){
			number1 = document.getElementById("output").value.toString();
			number2 = document.getElementById("input").value;

			switch (number1) {
				case "+":
					number1 = replaceOperator(number1,"+","/");
					break;
				case "-":
					number1 = replaceOperator(number1,"-","/");
					break;
				case "*":
					number1 = replaceOperator(number1,"*","/");
					break;
			}

			number1 = parseInt(number1);
			number2 = parseInt(number2);

			document.getElementById("output").innerHTML = number1 + " " + "/" + " ";
			document.getElementById("input").innerHTML = number2;
			operator = "/";
			changeOperator = true;
		} else if(document.getElementById("input").innerHTML != ""){
			number1 = document.getElementById("input").value;
			document.getElementById("output").innerHTML = document.getElementById("input").value + " / ";
			document.getElementById("input").innerHTML = "";
			operator = "/";
		}else{
			if(checkOperatorInOutput(document.getElementById("output").value.toString()) || document.getElementById("output").value.length == 0) {
				document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "/";
			}
			operator = "/";
		}
	});

	document.getElementById("key-=").addEventListener("click", function(){
		if(!changeOperator){
			number2 = parseInt(document.getElementById("input").value);
		}else{
			changeOperator = false;
		}


		switch(operator) {
			case "+":
				document.getElementById("input").innerHTML = add(number1,number2);
				document.getElementById("output").innerHTML = "";
				break;
			case "-":
				document.getElementById("input").innerHTML = subtract(number1,number2);
				document.getElementById("output").innerHTML = "";
				break;
			case "*":
				document.getElementById("input").innerHTML = multiply(number1,number2);
				document.getElementById("output").innerHTML = "";
				break;
			case "/":
				document.getElementById("input").innerHTML = divide(number1,number2);
				document.getElementById("output").innerHTML = "";
				break;
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