var money = 0;
const DOLLARSIGN = "$";
function moneyAdd(){
	money++;
	var moneyAmount = money + DOLLARSIGN;
	var btn = document.getElementById("eventBtn");
    btn.innerHTML = "you have " + moneyAmount;
}
