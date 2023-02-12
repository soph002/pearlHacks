//could be in a food js    
// adding rows into food tables
function addNewRowGoal() {
    var table = document.getElementById("goalTable");
    var row = table.insertRow(0);
    var desc = row.insertCell(0);
    var cost = row.insertCell(1);

    // could be cleaner with for loop. 
    let promptForDesc = prompt("Please enter the description of the food:");
    if (promptForDesc == null || promptForDesc == "") {
        desc.innerHTML = "invalid";
    } else {
        desc.innerHTML = promptForDesc;
        localStorage.setItem("goalDesc",promptForDesc);
    }

    let promptForCost = prompt("Please enter the cost of the food:");
    if (promptForCost == null || promptForCost == "") {
        cost.innerHTML = "invalid";
    } else {
        cost.innerHTML = promptForCost;
        localStorage.setItem("goalCost",promptForCost);
    }

    if(localStorage.getItem("salary") !=null)
    {
        if(localStorage.getItem("goalDesc") <= document.getElementById("total").innerHTML){
            localStorage.setItem("achievement","goalMet");
            var temp = parseInt(document.getElementById("total").innerHTML)-parseInt(cost.innerHTML);
            document.getElementById("total").innerHTML=temp;
        }
    }

}

function infoComeBackGoalPage(){
    let lastGoalDesc = localStorage.getItem("goalDesc");
    document.getElementById("goalDescID").innerHTML=lastFoodDesc;
    let lastGoalCost = localStorage.getItem("goalCost");
    document.getElementById("goalCostID").innerHTML=lastFoodCost;
    let lastTotalAmt = localStorage.getItem("salary");
    document.getElementById("total").innerHTML=lastTotalAmt;
}
