var frog = document.getElementById("frog")
var frog_emoji = "🐸"

frog.onclick = function(){
	if(frog.innerHTML.includes(frog_emoji)){
		frog.innerHTML = "frog"
	} else {
		frog.innerHTML = frog.innerHTML + frog_emoji
	}
}
