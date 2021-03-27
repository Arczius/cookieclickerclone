//variables in the dom
var moneyText = document.getElementById('moneyText');
var cookieBtn = document.getElementById('cookieBtn');
var buyWorker = document.getElementById('buyWorker');
var workersAmount = document.getElementById('workersAmount');

var money = 0;
var autoWorkers = 0;




function autoWorkerAdd(amount){
	for(i=0; i != amount; i++){
		autoWorkers++
	}
}

function removeMoney(amount){
	for(i=0; i != amount; i++){
		money--;
	}
}

//function to write the amount of money to the dom
function moneyWrite(){
	moneyText.innerText = "$ " + money;
}

//the cookie button
cookieBtn.onclick = function(){
	money++;
	moneyWrite();
}
//buy worker button
buyWorker.onclick = function(){
	autoWorkerAdd(1);
	removeMoney(10);
	moneyWrite();
}




//writes the initial money to the dom
moneyWrite();