// function BMI(){
// 	var w=document.getElementById('w').value;
// 	var h=document.getElementById('h').value;
// 	var bmi=w/(h/100*h/100);
// 	document.getElementById("result").innerHTML="Your BMI is" + bmi;
// }

// function BMI() {
// 	var height=document.getElementById('height').value;
// 	var weight=document.getElementById('weight').value;
// 	var bmi=weight/(height/100*h/100);
// 	var bmio=(bmi.toFixed(2));

// 	document.getElementById("result").innerHTML="Your BMI is " + bmio;
// }

function validate(evt) {
	var theEvent = evt || window.event;
  
	// Handle paste
	if (theEvent.type === 'paste') {
		key = event.clipboardData.getData('text/plain');
	} else {
	// Handle key press
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode(key);
	}
	var regex = /[0-9]|\./;
	if( !regex.test(key) ) {
	  theEvent.returnValue = false;
	  if(theEvent.preventDefault) theEvent.preventDefault();
	}
}

function BMI() {
  
	const age = document.getElementById('age');
	const gender = document.getElementById('gender').value;
	const weight = document.getElementById('weight');
	const height = document.getElementById('height');
	const activity = document.getElementById('activity').value;
	var bmi
	// var bmio=(bmi.toFixed(2));
	
	if (age.value === '' || weight.value === '' || height.value === '' || 80 < age.value || age.value < 15) {
	  errorMessage('Please enter the values.')
	} else if(gender === 'male' && activity === "1") {
	  bmi = 1.2 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
	} else if(gender === 'male' && activity === "2") {
	  bmi = 1.375 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
	} else if (gender === 'male' && activity === "3") {
	  bmi = 1.55 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
	} else if(gender === 'male' && activity === "4") {
	  bmi = 1.725 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
	} else if(gender === 'male' && activity === "5") {
	  bmi = 1.9 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)))
	  ;
	} else if(gender === 'female' && activity === "1") {
	  bmi = 1.2 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
	} else if(gender === 'female' && activity === "2") {
	  bmi = 1.375 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
	} else if(gender === 'female' && activity === "3") {
	  bmi = 1.55 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
	} else if(gender === 'female' && activity === "4") {
	  bmi = 1.725* (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
	} else {
	  bmi = 1.9 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age.value)));
	} 
  
	// document.getElementById('results').style.display = 'block';
	document.getElementById("result").innerHTML="Your BMI is " + bmi;
  }