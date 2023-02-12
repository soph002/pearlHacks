 
// adding rows into goal tables
function addNewRowIncome() {
    var table = document.getElementById("incomeTable");
    var row = table.insertRow(0);
    var desc = row.insertCell(0);
    var amt = row.insertCell(1);

    // could be cleaner with for loop. 
    let promptForDesc = prompt("Please enter the description of income:");
    if (promptForDesc == null || promptForDesc == "") {
        desc.innerHTML = "invalid";
    } else {
        desc.innerHTML = promptForDesc;
        localStorage.setItem("incomeDesc",promptForDesc);
    }

    let promptForAmt = prompt("Please enter the amount of income");
    if (promptForAmt == null || promptForAmt == "") {
        amt.innerHTML = "invalid";
    } else {
        amt.innerHTML = promptForAmt;
        localStorage.setItem("incomeAmt",promptForAmt);
    }

    if(localStorage.getItem("salary") !=null)
    {
        let temp = parseInt(localStorage.getItem("salary"))+parseInt(amt.innerHTML);
        localStorage.setItem("salary",temp);
    }

}

function infoComeBackIncomePage(){
    let lastIncomeDesc = localStorage.getItem("incomeDesc");
    document.getElementById("incomeDescID").innerHTML=lastIncomeDesc;
    let lastIncomeAmt = localStorage.getItem("incomeAmt");
    document.getElementById("incomeAmtID").innerHTML=lastIncomeAmt;
    let lastTotalAmt = localStorage.getItem("salary");
    document.getElementById("total").innerHTML=lastTotalAmt;
}
