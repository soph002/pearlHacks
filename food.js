//one of the options for users, wonder if this could be put into hierarchies with more time
// adding rows into food tables
function addNewRowFood() {
    var table = document.getElementById("FoodTable");
    var row = table.insertRow(0);
    var desc = row.insertCell(0);
    var cost = row.insertCell(1);

    // could be cleaner with for loop. 
    let promptForDesc = prompt("Please enter the description");
    if (promptForDesc == null || promptForDesc == "") {
        desc.innerHTML = "invalid";
    } else {
        desc.innerHTML = promptForDesc;
        localStorage.setItem("foodDesc",promptForDesc);
    }

    let promptForCost = prompt("Please enter the cost");
    if (promptForCost == null || promptForCost == "") {
        cost.innerHTML = "invalid";
    } else {
        cost.innerHTML = promptForCost;
        localStorage.setItem("foodCost",promptForCost);
    }

}

//reset for this page
function infoComeBackFoodPage(){
    let lastFoodDesc = localStorage.getItem("foodDesc");
    document.getElementById("foodDescID").innerHTML=lastFoodDesc;
    let lastFoodCost = localStorage.getItem("foodCost");
    document.getElementById("foodCostID").innerHTML=lastFoodCost;
    let lastTotalAmt = localStorage.getItem("salary");
    document.getElementById("total").innerHTML=lastTotalAmt;

}