//contains the entire site, currently contains only the cookie
var siteContainer = document.getElementById('siteContainer');

var cookieBtn = document.createElement("button");
siteContainer.appendChild(cookieBtn);
cookieBtn.innerText = "cookie";
cookieBtn.setAttribute("id", "cookieBtn");
cookieBtn.setAttribute("class", "cookieClass")

var workerArray = [
	"worker",
	"cookie hunter"
]

//variables in the dom
var btnContainer = document.getElementById('btnContainer');
var moneyText = document.getElementById('moneyText');
var buyWorker = document.getElementById('buyWorker');
var workersAmount = document.getElementById('workersAmount');
var buyHunter = document.getElementById('buyHunter');

var money = 0;
var autoWorkers = 0;
var workerCost = 0;

function workerAmountText(){
	if(autoWorkers == 0){
		workersAmount.innerText = "you have no workers yet, buy some";
	}
	else if(autoWorkers == 1){
		workersAmount.innerText = "you have " + autoWorkers + " worker";
	}
	else{
		workersAmount.innerText = "you have " + autoWorkers + " workers";
	}
	
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
//worker money generator
function timeoutMoney(){
	if(autoWorkers > 0){
		setInterval(moneyAddWorker(), 1000);
	}
}
function moneyAddWorker(){
	money++;
	timeoutMoney();
	moneyWrite();
}

//start function which includes every start script
function start(){
	moneyWrite();
	workerAmountText();
	console.log("the game has succesfully started");
}

//starts the game
start();