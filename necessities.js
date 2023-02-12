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

    if(localStorage.getItem("salary") !=null)
                    {
                        var temp = parseInt(document.getElementById("total").innerHTML)-parseInt(cost.innerHTML);
                        document.getElementById("total").innerHTML=temp;
                    }

}

//reset for this page
function infoComeBackFoodPage(){
    let lastNecDesc = localStorage.getItem("necsDesc");
    document.getElementById("necDesc").innerHTML=lastFoodDesc;
    let lastFoodCost = localStorage.getItem("necsCost");
    document.getElementById("necCosD").innerHTML=lastFoodCost;

}