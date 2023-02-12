

//can stay in main
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
        localStorage.setItem("personName",text)

}


//can stay on main
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
                        localStorage.setItem("salary",temp)
                    }
    }


function animalName() {
    let text;
	    let nameInput = prompt("Please enter the name for your bunny");
        if (nameInput == null || nameInput == "") {
            text = "invalid";
        } else {
            text = "Hi! I'm "+nameInput;
        }
        document.getElementById("nameOfBunny").innerHTML=text;
        localStorage.setItem("animalName",text)
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

function infoComeBack() {
    let lastTotalAmt = localStorage.getItem("salary");
    document.getElementById("total").innerHTML=lastTotalAmt;
    let lastNameSubscription = localStorage.getItem("subscriptionName");
    document.getElementById("subName").innerHTML=lastNameSubscription;
    let lastCostSubscription = localStorage.getItem("subscriptionCost");
    document.getElementById("subCost").innerHTML=lastCostSubscription;
    let lastDateSubscription = localStorage.getItem("subscriptionDate");
    document.getElementById("subDate").innerHTML=lastDateSubscription;
    document.getElementById("nameOfPerson").innerHTML=localStorage.getItem("personName");
    document.getElementById("nameOfBunny").innerHTML=localStorage.getItem("animalName");
    if(localStorage.getItem("achievement")!=null){
        var img = document.createElement("img");
        img.src = "https://cdn.iconscout.com/icon/free/png-256/carrot-6932694-5659217.png";
        img.alt ="carrot!"
        img.height="50"
        img.width="50"
        var src = document.getElementById("carrot");
        src.appendChild(img);
    }
}





