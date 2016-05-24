/**
 * core
 */
function isInvalid(n1,n2){

	if(isNaN(n1) || isNaN(n2) || typeof(n1) == "undefined" || typeof(n2) == "undefined"){
		return true;
	}
	return false;
}

function calculate(n1,n2,operator){
	
	if(isInvalid(n1,n2)){
		invalid = true;
		return "Invalid Calculation!";
	}

	switch(operator) {
		case "+":
			var result = parseFloat(n1) + parseFloat(n2);
			return result.toFixed(2);	
		case "-":
			var result = parseFloat(n1) - parseFloat(n2);
			return result.toFixed(2);
		case "*":
			var result = parseFloat(n1) * parseFloat(n2);
			return result.toFixed(2);
		case "/":
			if(n2 == 0){
				return "Invalid Calculation!";
				invalid = true;
			}
			var result = parseFloat(n1) / parseFloat(n2);
			return result.toFixed(2);
	}
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
	var invalid = false;
	var inputField = document.getElementById("input");
	var outputField = document.getElementById("output");

	 /* Operator Events */

	var operators = document.getElementsByClassName("operator");

    function operatorPressed(operators){

    	document.getElementById("key-" + operators.value).addEventListener("click", function(){
    		
    		if(invalid){
				return;
			}

			if(inputField.value != "" && outputField.value != ""){
				number1 = parseFloat(findAndReplaceOperator(outputField.value.toString(),operators.value));
				number2 = parseFloat(inputField.value);
				outputField.innerHTML = number1 + " " + operators.value + " ";
				inputField.innerHTML = number2;
				operator = operators.value;
				changeOperator = true;
			}else if(inputField.innerHTML != ""){
				number1 = parseFloat(inputField.value);
				outputField.innerHTML = number1 + " " + operators.value + " ";
				inputField.innerHTML = "";
				operator = operators.value;
			}else{
				if(checkOperatorInOutput(outputField.value.toString()) || outputField.value.length == 0){
					outputField.innerHTML = outputField.innerHTML + " " + operators.value + " ";
				}
				operator = operators.value;
			}
		});
    }

	Array.prototype.forEach.call(operators, operatorPressed);

	/* Command Events */

	document.getElementById("key-=").addEventListener("click", equal);

	function equal(){

		if(invalid){
			invalid = false;
			clear();
		}

		if(!changeOperator){
			number2 = parseFloat(inputField.value);
		}else{
			changeOperator = false;
		}

		inputField.innerHTML = calculate(number1,number2,operator);

		if(isNaN(inputField.innerHTML)){
			invalid = true;
		}

		console.log(invalid);
		outputField.innerHTML = "";
	}

	document.getElementById("key-c").addEventListener("click",clear);

	function clear(){

		inputField.innerHTML = "";
		outputField.innerHTML = "";
		number1 = undefined;
		number2 = undefined;
	}

	/* Number Events */
	
	var numbers = document.getElementsByClassName("number");

	function keyPressEvents(numbers){
	
		if(numbers.value == 0){ 
		 	numbers.addEventListener("click", function() {

		 		if(invalid){
					invalid = false;
					clear();
				}

				if(inputField.innerHTML > 0){
					inputField.innerHTML =  inputField.innerHTML + 0;
				}else{
					inputField.innerHTML = 0;
				}
			});
	 	}else{
	 		numbers.addEventListener("click", function() {
	 			
	 			if(invalid){
					invalid = false;
					clear();
				}

				if(inputField.innerHTML == 0){
					inputField.innerHTML = numbers.value;
				}else{
					inputField.innerHTML = inputField.innerHTML +  numbers.value;
				}
	 		});
	 	}
	}

	Array.prototype.forEach.call(numbers, keyPressEvents);


});