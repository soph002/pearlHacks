
//collecting the user information
var percentageToSave = document.getElementById("PS").innerHTML
var avgSalary = document.getElementById("AS").innerHTML
var calculate = document.getElemenetById("calculate")

//handles the original calculation of PS and AS
calculate.onclick = function calculateOriginalSpend() {
	//find a way to double check we are only given numbers
	if (percentageToSave==null || percentageToSave=="" || avgSalary==null || avgSalary=="" ) {
		//error message at the top?
	}
	else {
		//double checking I have numbers
		try {
			Integer.parseInt(percentageToSave)
			Integer.parseInt(avgSalary)
		}
		catch (NumberFormatException) {
			return null
		}
		//return what the original spend is
		let answer= (percentageToSave/100) * avgSalary
		document.getElemenetById("answer").innerHTML=answer

	}
}

//add name method
function clickName() {
    let text;
	let promptForName = prompt("Please enter your name");
    if (promptForName == null || promptForName == "") {
        text = "invalid";
    } else {
        text = "Welcome Back "+promptForName+"!";
    }
    document.getElemenetById("nameOfPerson").innerHTML=text;

}




//updates the amount left to spend when a purchase is added in any category
var amount = document.getElemenetById("amt").innerHTML
var updateAmount = document.getElementById("Update")

//updateAmount.onclick =

function updateAmountLeft() {
	let currentTotal= document.getElemenetById("amtLeftToSpend").textContent
	let answer1 = Integer.parseInt(currentTotal)-amount
	document.getElementById("answer1").innerHTML=answer1
}

	function myCreateFunction() {
                    var table = document.getElementById("Subscriptions");
                    var row = table.insertRow(0);
                    var name = row.insertCell(0);
                    var cost = row.insertCell(1);
                    var date = row.insertCell(2);

                    // could be cleaner with for loop. 
                    let promptForName = prompt("Please enter the name of subscription:");
                    if (promptForName == null || promptForName == "") {
                        name.innerHTML = "invalid";
                    } else {
                        name.innerHTML = promptForName;
                    }

                    let promptForCost = prompt("Please enter the name of subscription:");
                    if (promptForCost == null || promptForCost == "") {
                        cost.innerHTML = "invalid";
                    } else {
                        cost.innerHTML = promptForCost;
                    }
                    
                    let promptForDate = prompt("Please enter the name of subscription:");
                    if (promptForDate == null || promptForDate == "") {
                        date.innerHTML = "invalid";
                    } else {
                        date.innerHTML = promptForDate;
                    }
    }



