//could be in a food js    
// adding rows into food tables
function addNewRowFood() {
    var table = document.getElementById("FoodTable");
    var row = table.insertRow(0);
    var desc = row.insertCell(0);
    var cost = row.insertCell(1);

    // could be cleaner with for loop. 
    let promptForDesc = prompt("Please enter the description of the food:");
    if (promptForDesc == null || promptForDesc == "") {
        desc.innerHTML = "invalid";
    } else {
        desc.innerHTML = promptForDesc;
        localStorage.setItem("foodDesc",promptForDesc);
    }

    let promptForCost = prompt("Please enter the cost of the food:");
    if (promptForCost == null || promptForCost == "") {
        cost.innerHTML = "invalid";
    } else {
        cost.innerHTML = promptForCost;
        localStorage.setItem("foodCost",promptForCost);
    }

}