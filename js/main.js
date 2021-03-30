//variables in the dom
var btnContainer = document.getElementById('btnContainer');
var moneyText = document.getElementById('moneyText');
var cookieBtn = document.getElementById('cookieBtn');
var buyWorker = document.getElementById('buyWorker');
var workersAmount = document.getElementById('workersAmount');
var buyHunter = document.getElementById('buyHunter');

var money = 0;
var autoWorkers = 0;
var workerCost = 0;

function workerAmountText(){
	workersAmount.innerText = "you have " + autoWorkers + " workers";
}

function autoWorkerAdd(amount){
	if (workerCost > money) {
		alert("the worker couldnt be bought");
	}
	else{
		for(i=0; i != amount; i++){
			autoWorkers++;
		}
		workerAmountText();
	}
}

function removeMoney(amount){
	if (workerCost > money) {
		alert("you do not have enough money");
	}
	else{
		for(i=0; i != amount; i++){
			money--;
		}
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
	workerCost = 10;
	autoWorkerAdd(1);
	removeMoney(workerCost);
	moneyWrite();
}

//buy hunter button
buyHunter.onclock = function(){
    workerCost = 17;
    autoWorkerAdd(2);
    removeMoney(workerCost);
    moneyWrite();
}

function start(){
	moneyWrite();
	workerAmountText();
	console.log("the game has succesfully started");
}



//starts the game
start();