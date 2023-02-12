//one of the options for users, wonder if this could be put into hierarchies with more time
// adding rows into party tables
function addNewRow() {
    var table = document.getElementById("partyTable");
    var row = table.insertRow(0);
    var desc = row.insertCell(0);
    var cost = row.insertCell(1);

    // could be cleaner with for loop. 
    let promptForDesc = prompt("Please enter the description");
    if (promptForDesc == null || promptForDesc == "") {
        desc.innerHTML = "invalid";
    } else {
        desc.innerHTML = promptForDesc;
        localStorage.setItem("partyDesc",promptForDesc);
    }

    let promptForCost = prompt("Please enter the cost");
    if (promptForCost == null || promptForCost == "") {
        cost.innerHTML = "invalid";
    } else {
        cost.innerHTML = promptForCost;
        localStorage.setItem("partyCost",promptForCost);
    }

    
    var temp = parseInt(localStorage.getItem("salary"))-parseInt(cost.innerHTML);
    localStorage.setItem("salary",temp)

}

//reset for this page
function infoComeBackParty(){
    let lastPartyDesc = localStorage.getItem("partyDesc");
    document.getElementById("partyDesc").innerHTML=lastPartyDesc;
    let lastPartyCost = localStorage.getItem("partyCost");
    document.getElementById("partyCost").innerHTML=lastPartyCost;
    let lastTotalAmt = localStorage.getItem("salary");
    document.getElementById("total").innerHTML=lastTotalAmt;

}