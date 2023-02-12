
// adding rows into food tables
function addNewRowNecs() {
    var table = document.getElementById("NecsTable");
    var row = table.insertRow(0);
    var desc = row.insertCell(0);
    var cost = row.insertCell(1);

    // could be cleaner with for loop. 
    let promptForDesc = prompt("Please enter the description");
    if (promptForDesc == null || promptForDesc == "") {
        desc.innerHTML = "invalid";
    } else {
        desc.innerHTML = promptForDesc;
        localStorage.setItem("necsDesc",promptForDesc);
    }

    let promptForCost = prompt("Please enter the cost");
    if (promptForCost == null || promptForCost == "") {
        cost.innerHTML = "invalid";
    } else {
        cost.innerHTML = promptForCost;
        localStorage.setItem("necsCost",promptForCost);
    }

    
    var temp = parseInt(localStorage.getItem("salary"))-parseInt(cost.innerHTML);
    localStorage.setItem("salary",temp)

}

//reset for this page
function infoComeBackNec(){
    let lastNecDesc = localStorage.getItem("necsDesc");
    document.getElementById("necsDesc").innerHTML=lastNecDesc;
    let lastNecCost = localStorage.getItem("necsCost");
    document.getElementById("necsCost").innerHTML=lastNecCost;
    let lastTotalAmt = localStorage.getItem("salary");
    document.getElementById("total").innerHTML=lastTotalAmt;

}