
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
	    let nameInput = prompt("Please enter your name");
        if (nameInput == null || nameInput == "") {
            text = "invalid";
        } else {
            text = "Welcome Back "+nameInput+"!";
        }
        document.getElementById("nameOfPerson").innerHTML=text;

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

//adding subscriptions to table on homepage
function myCreateFunction() {
    var table = document.getElementById("Subscriptions");
    var row = table.insertRow(1);
    var name = row.insertCell(0);
    var cost = row.insertCell(1);
    var date = row.insertCell(2);

                    // could be cleaner with for loop. 
                    let promptForName = prompt("Please enter the name of subscription:");
                    if (promptForName == null || promptForName == "") {
                        name.innerHTML = "invalid";
                    } else {
                        name.innerHTML = promptForName;
                        localStorage.setItem("subscriptionName",promptForName);
                    }

                    let promptForCost = prompt("Please enter the cost of subscription:");
                    if (promptForCost == null || promptForCost == "") {
                        cost.innerHTML = "invalid";
                    } else {
                        cost.innerHTML = promptForCost;  
                        localStorage.setItem("subscriptionCost", promptForCost);      
                    }
                    
                    let promptForDate = prompt("Please enter the date of subscription:");
                    if (promptForDate == null || promptForDate == "") {
                        date.innerHTML = "invalid";
                    } else {
                        date.innerHTML = promptForDate;
                        localStorage.setItem("subscriptionDate",promptForDate);
                    }
                    if(localStorage.getItem("salary") !=null)
                    {
                        var temp = parseInt(document.getElementById("total").innerHTML)-parseInt(cost.innerHTML);
                        document.getElementById("total").innerHTML=temp;
                    }
    }
// adding rows into food tables
    function addNewRowFood() {
        var table = document.getElementById("FoodTable");
        var row = table.insertRow(0);
        var desc = row.insertCell(0);
        var cost = row.insertCell(1);
    
        // could be cleaner with for loop. 
        let promptForDesc = prompt("Please enter the name of subscription:");
        if (promptForDesc == null || promptForDesc == "") {
            desc.innerHTML = "invalid";
        } else {
            desc.innerHTML = promptForDesc;
            localStorage.setItem("foodDesc",promptForDesc);
        }
    
        let promptForCost = prompt("Please enter the name of subscription:");
        if (promptForCost == null || promptForCost == "") {
            cost.innerHTML = "invalid";
        } else {
            cost.innerHTML = promptForCost;
            localStorage.setItem("foodCost",promptForCost);
        }
    
    }

    // adding rows into food tables
    function addNewRowNecs() {
        var table = document.getElementById("NecsTable");
        var row = table.insertRow(0);
        var desc = row.insertCell(0);
        var cost = row.insertCell(1);
    
        // could be cleaner with for loop. 
        let promptForDesc = prompt("Please enter the name of subscription:");
        if (promptForDesc == null || promptForDesc == "") {
            desc.innerHTML = "invalid";
        } else {
            desc.innerHTML = promptForDesc;
            localStorage.setItem("necsDesc",promptForDesc);
        }
    
        let promptForCost = prompt("Please enter the name of subscription:");
        if (promptForCost == null || promptForCost == "") {
            cost.innerHTML = "invalid";
        } else {
            cost.innerHTML = promptForCost;
            localStorage.setItem("necsCost",promptForCost);
        }
    
    }

function inputSalary(){
    let promptForAvgSal = prompt("Enter average salary for month");
    if (promptForAvgSal == null || promptForAvgSal == "") {
        localStorage.setItem("salary",0);
        // in the future would clean this up so it would function with this error
    } else {
        localStorage.setItem("salary",promptForAvgSal);
    }
   document.getElementById("total").innerHTML=localStorage.getItem("salary");
}

function infoComeBackHomePage() {
    let lastTotalAmt = localStorage.getItem("salary");
    document.getElementById("total").innerHTML=lastTotalAmt;
    let lastNameSubscription = localStorage.getItem("subscriptionName");
    document.getElementById("subName").innerHTML=lastNameSubscription;
    let lastCostSubscription = localStorage.getItem("subscriptionCost");
    document.getElementById("subCost").innerHTML=lastCostSubscription;
    let lastDateSubscription = localStorage.getItem("subscriptionDate");
    document.getElementById("subDate").innerHTML=lastDateSubscription;

}

function infoComeBackFoodPage(){
    let lastFoodDesc = localStorage.getItem("foodDesc");
    document.getElementById("foodDescID").innerHTML=lastFoodDesc;
    let lastFoodCost = localStorage.getItem("foodCost");
    document.getElementById("foodCostID").innerHTML=lastFoodCost;

}



