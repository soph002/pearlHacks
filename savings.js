//one of the options for users, wonder if this could be put into hierarchies with more time
// adding rows into savings tables
function addNewRowSavings() {
    var table = document.getElementById("savingsTable");
    var row = table.insertRow(0);
    var desc = row.insertCell(0);
    var cost = row.insertCell(1);

    // could be cleaner with for loop. 
    let promptForDesc = prompt("Please enter the description");
    if (promptForDesc == null || promptForDesc == "") {
        desc.innerHTML = "invalid";
    } else {
        desc.innerHTML = promptForDesc;
        localStorage.setItem("savDesc",promptForDesc);
    }

    let promptForCost = prompt("Please enter the cost");
    if (promptForCost == null || promptForCost == "") {
        cost.innerHTML = "invalid";
    } else {
        cost.innerHTML = promptForCost;
        localStorage.setItem("savCost",promptForCost);
    }

    
    var temp = parseInt(localStorage.getItem("salary"))+parseInt(cost.innerHTML);
    localStorage.setItem("salary",temp)

}

//reset for this page
function infoComeBackSavings(){
    let lastSavDesc = localStorage.getItem("savDesc");
    document.getElementById("savDesc").innerHTML=lastSavDesc;
    let lastSavCost = localStorage.getItem("savCost");
    document.getElementById("savCost").innerHTML=lastSavCost;
    let lastTotalAmt = localStorage.getItem("salary");
    document.getElementById("total").innerHTML=lastTotalAmt;

}