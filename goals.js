 //one of the options for users, wonder if this could be put into hierarchies with more time
// adding rows into goal tables
function addNewRowGoal() {
    var table = document.getElementById("goalTable");
    var row = table.insertRow(0);
    var desc = row.insertCell(0);
    var cost = row.insertCell(1);

    // could be cleaner with for loop. 
    let promptForDesc = prompt("Please enter the description of the goal:");
    if (promptForDesc == null || promptForDesc == "") {
        desc.innerHTML = "invalid";
    } else {
        desc.innerHTML = promptForDesc;
        localStorage.setItem("goalDesc",promptForDesc);
    }

    let promptForCost = prompt("Please enter the cost of the gpa;:");
    if (promptForCost == null || promptForCost == "") {
        cost.innerHTML = "invalid";
    } else {
        cost.innerHTML = promptForCost;
        localStorage.setItem("goalCost",promptForCost);
    }

    if(localStorage.getItem("salary") !=null)
    {
        let temp = parseInt(localStorage.getItem("salary"))-parseInt(cost.innerHTML);
        localStorage.setItem("salary",temp);
        //checks to see if the goal was met. 
        if(temp<=parseInt(localStorage.getItem("salary")))
        {
            localStorage.setItem("achievement",temp)
        }
    }

}

function infoComeBackGoalPage(){
    let lastGoalDesc = localStorage.getItem("goalDesc");
    document.getElementById("goalDescID").innerHTML=lastGoalDesc;
    let lastGoalCost = localStorage.getItem("goalCost");
    document.getElementById("goalCostID").innerHTML=lastGoalCost;
    let lastTotalAmt = localStorage.getItem("salary");
    document.getElementById("total").innerHTML=lastTotalAmt;
}
