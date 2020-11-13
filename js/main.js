var money = 0;
var worker = 0;
const DOLLARSIGN = "$";
const NOTENOUGH = "sorry you do not have enough money to buy that"
function moneyAdd(){
	money++;
	var moneyAmount = money + DOLLARSIGN;
	var btn = document.getElementById("eventBtn");
    btn.innerHTML = "you have " + moneyAmount;
    console.log("you have $" + money);
}

function buyWorker(){
	if(money > 0){
		money--;
		console.log("you have $" + money);
		worker++;
		console.log("you have " + worker + " workers");
	}
	else{
		alert(NOTENOUGH);
	}
	
}