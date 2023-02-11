var frog = document.getElementById("frog")
var frog_emoji = "🐸"

frog.onclick = function(){
	if(frog.innerHTML.includes(frog_emoji)){
		frog.innerHTML = "frog"
	} else {
		frog.innerHTML = frog.innerHTML + frog_emoji
	}
}

//collecting the user information
var percentageToSave = document.getElementById("PS").innerHTML
var avgSalary = document.getElementById("AS").innerHTML
var calculate = document.getElemenetById("calculate")

//handles the original calculation of PS and AS
calculate.onclick = function calculateOriginalSpend() {
	//find a way to double check we are only given numbers
	if (percentageToSave==null || percentageToSave=="" || avgSalary==null || avgSalary=="" ) {
		//error message at the top?
	}
	else {
		//double checking I have numbers
		try {
			Integer.parseInt(percentageToSave)
			Integer.parseInt(avgSalary)
		}
		catch (NumberFormatException) {
			return null
		}
		//return what the original spend is
		let answer= (percentageToSave/100) * avgSalary
		document.getElemenetById("answer").innerHTML=answer

	}
}



