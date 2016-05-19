/**
 * core
 */
function isInvalid(n1,n2){
	if(isNaN(n1) || isNaN(n2) || typeof(n1) == "undefined" || typeof(n2) == "undefined"){
		return true;
	}
	return false;
}
function add(n1,n2){
	if(isInvalid(n1,n2)){
		return "Invalid Calculation!";
	}
	var result = parseFloat(n1) + parseFloat(n2);
	return result.toFixed(2);
}

function subtract(n1,n2){
	if(isInvalid(n1,n2)){
		return "Invalid Calculation!";
	}
	var result = parseFloat(n1) - parseFloat(n2);
	return result.toFixed(2);
}

function multiply(n1,n2){
	if(isInvalid(n1,n2)){
		return "Invalid Calculation!";
	}
	var result = parseFloat(n1) * parseFloat(n2);
	return result.toFixed(2);
}

function divide(n1,n2){
	if(isInvalid(n1,n2) || n2 == 0){
		return "Invalid Calculation!";
	}
	var result = parseFloat(n1) / parseFloat(n2);
	return result.toFixed(2);
}

function checkOperatorInOutput(text){
	if(text.indexOf("+") == -1 && text.indexOf("/") == -1 && text.indexOf("*") == -1 && text.indexOf("-") == -1  ){
		return true;
	}
	return false;
}

function findAndReplaceOperator(number,mainOperator){
	var operators = ["+", "-", "*", "/"];
	operators.splice(operators.indexOf(mainOperator),1);

	switch (number) {
		case operators[0]:
			number = number.value.replace(operators[0],mainOperator);
			break;
		case operators[1]:
			number = number.value.replace(operators[1],mainOperator);
			break;			
		case operators[2]:
			number = number.value.replace(operators[2],mainOperator);
			break;
	}		
	return number;
}

/**
 * UI
 */
window.addEventListener('load', function() {
	var number1;
	var number2;
	var operator;
	var changeOperator;
	
	
	var inputField = document.getElementById("input");
	var outputField = document.getElementById("output");

	document.getElementById("key-c").addEventListener("click", function(){
		inputField.innerHTML = "";
		outputField.innerHTML = "";
		number1 = undefined;
		number2 = undefined;
	});

	 /* Operator Events */
	var operators = ["+", "-", "*", "/"];
	
	
	operators.forEach(function(element) {
	  	document.getElementById("key-" + element).addEventListener("click", function(){
			if(inputField.value != "" && outputField.value != ""){
				number1 = parseFloat(findAndReplaceOperator(outputField.value.toString(),element));
				number2 = parseFloat(inputField.value);
				outputField.innerHTML = number1 + " " + element + " ";
				inputField.innerHTML = number2;
				operator = element;
				changeOperator = true;
			}else if(inputField.innerHTML != ""){
				number1 = parseFloat(inputField.value);
				outputField.innerHTML = number1 + " " + element + " ";
				inputField.innerHTML = "";
				operator = element;
			}else{
				if(checkOperatorInOutput(outputField.value.toString()) || outputField.value.length == 0){
					outputField.innerHTML = outputField.innerHTML + " " + element + " ";
				}
				operator = element;
			}
		});
	});

	document.getElementById("key-=").addEventListener("click", function(){
		if(!changeOperator){
			number2 = parseFloat(inputField.value);
		}else{
			changeOperator = false;
		}

		switch(operator) {
			case "+":
				inputField.innerHTML = add(number1,number2);
				outputField.innerHTML = "";
				break;
			case "-":
				inputField.innerHTML = subtract(number1,number2);
				outputField.innerHTML = "";
				break;
			case "*":
				inputField.innerHTML = multiply(number1,number2);
				outputField.innerHTML = "";
				break;
			case "/":
				inputField.innerHTML = divide(number1,number2);
				outputField.innerHTML = "";
				break;
		}

	});

	/* Key Press Events */
	for (var id = 0; id <= 9; id++) {
	 (function(id){
	 	if(id == 0){ 
		 	document.getElementById("key-0").addEventListener("click", function() {
				if(inputField.innerHTML > 0){
					inputField.innerHTML =  inputField.innerHTML + 0;
				}else{
					inputField.innerHTML = 0;
				}
			});
	 	}else{
	 		document.getElementById("key-" + id).addEventListener("click", function() {
				if(inputField.innerHTML == 0){
					inputField.innerHTML = id;
				}else{
					inputField.innerHTML = inputField.innerHTML + id;
				}
	 		});
	 	}
	 	
	})(id)

	}
});