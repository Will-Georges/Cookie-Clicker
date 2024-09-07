//Variables

let upgradeOneRunning = false;
let upgradeTwoRunning = false;
let upgradeThreeRunning = false;
let upgradeFourRunning = false;
let upgradeFiveRunning = false;
let upgradeSixRunning = false;
let upgradeSevenRunning = false;
let upgradeEightRunning = false;
let upgradeNineRunning = false;

let burgerButton = document.querySelector(".burger-button");
let scoreBottom = document.querySelector(".score-bottom");
let scoreCenter = document.querySelector(".score-center");
let totalBurgersMade = document.querySelector(".total-burgers-made");
let burgerName = document.querySelector(".burger-name");

let upgradeOne = document.querySelector(".one");
let upgradeTwo = document.querySelector(".two");
let upgradeThree = document.querySelector(".three");
let upgradeFour = document.querySelector(".four");
let upgradeFive = document.querySelector(".five");
let upgradeSix = document.querySelector(".six");
let upgradeSeven = document.querySelector(".seven");
let upgradeEight = document.querySelector(".eight");
let upgradeNine = document.querySelector(".nine");


let profit = 0;

let tbm = 0;

let idle = 0;

let burgerShopName = window.prompt('Whats your name') + "'s Burger Shop";

let heading = document.querySelector('.heading');

var btn = document.querySelectorAll("button.modal-button");

var modals = document.querySelectorAll('.modal');

var spans = document.getElementsByClassName("close");

var coll = document.getElementsByClassName("collapsible");

var i;

let stats = {
  score: profit,
  burgersMade: tbm,
  afk: idle
};


heading.textContent = burgerShopName;

console.log(burgerShopName);



//functions

function whenButtonClicked() {
  profit = profit + 1;
  tbm = tbm + 1;
  totalBurgersMade.textContent = "Total Clicks : " + tbm;
  scoreBottom.textContent = "Profit : " + profit;
  scoreCenter.textContent = "Profit : " + profit;
  console.log("Profit : " + profit);
  console.log("Total Burgers Made : " + tbm);
  if (upgradeOneRunning === true ) {
    profit = profit + 2;
  } if (upgradeTwoRunning === true ) {
    profit = profit + 2;
  } if (upgradeThreeRunning === true ) {
    profit = profit + 5;
  } if (upgradeFourRunning === true ) {
    profit = profit + 20;
  } if (upgradeSixRunning === true ) {
    profit = profit + 120;
    idle = idle + 80;
  } if (upgradeEightRunning === true ) {
    profit = profit + 100;
  } if (upgradeNineRunning === true ) {
    profit = profit + 500;
  } 
}

function whenUpgradeOneBought() { 
  if (profit >= 100){
  profit-= 100;
  upgradeOne.style.display = "none";
  burgerButton.src = "second-burger.png";
  burgerButton.style.width = "480px";
  burgerName.textContent = "The McAverage";
  upgradeOneRunning = true;
  console.log(stats);
}
}
function whenUpgradeTwoBought() { 
  if (profit >= 250){
  profit-= 250;
  upgradeTwo.style.display = "none";
  burgerButton.src = "third-burger.png";
  burgerButton.style.width = "500px";
  burgerName.textContent = "The McFlavour";
  upgradeTwoRunning = true;
  console.log(stats);
}
}
function whenUpgradeThreeBought() { 
  if (profit >= 500){
  profit-= 500;
  upgradeThree.style.display = "none";
  upgradeThreeRunning = true;
  console.log(stats);
}
}
function whenUpgradeFourBought() { 
  if (profit >= 1000){
  profit-= 1000;
  upgradeFour.style.display = "none";
  upgradeFourRunning = true;
  console.log(stats);
}
}
function whenUpgradeFiveBought() { 
  if (profit >= 5000){
  profit-= 5000;
  upgradeFive.style.display = "none";
  upgradeFiveRunning = true;
  window.setInterval(autoClickOn,1000);
  console.log(stats);
} 
}

function autoClickOn() {
  idle = 20;
  profit = profit + idle;
  scoreBottom.textContent = "Profit : " + profit;
  scoreCenter.textContent = "Profit : " + profit;
}

function whenUpgradeSixBought() {
  if (profit >= 100000){
  profit-= 100000;
  upgradeSix.style.display = "none";
  upgradeSixRunning = true;
  window.setInterval(autoClickOn2,1000);
  console.log(stats);
} 
}

function autoClickOn2() {
  idle = 80;
  profit = profit + idle;
  scoreBottom.textContent = "Profit : " + profit;
  scoreCenter.textContent = "Profit : " + profit;
}

function whenUpgradeSevenBought() {
  if (profit >= 1000000){
  profit-= 1000000;
  upgradeSeven.style.display = "none";
  upgradeSevenRunning = true;
  window.setInterval(autoClickOn3,1000);
  console.log(stats);
} 
}

function autoClickOn3() {
  idle = 200;
  profit = profit + idle;
  scoreBottom.textContent = "Profit : " + profit;
  scoreCenter.textContent = "Profit : " + profit;
}

function whenUpgradeEightBought() {
  if (profit >= 100000000){
  profit-= 100000000;
  upgradeEight.style.display = "none";
  upgradeEightRunning = true;
  window.setInterval(autoClickOn4,1000);
  console.log(stats);
} 
}

function autoClickOn4() {
  idle = 400;
  profit = profit + idle;
  scoreBottom.textContent = "Profit : " + profit;
  scoreCenter.textContent = "Profit : " + profit;
}

function whenUpgradeNineBought() {
  if (profit >= 100000000000){
  profit-= 100000000000;
  upgradeNine.style.display = "none";
  upgradeNineRunning = true;
  window.setInterval(autoClickOn5,1000);
  console.log(stats);
} 
}

function autoClickOn5() {
  idle = 1000;
  profit = profit + idle;
  scoreBottom.textContent = "Profit : " + profit;
  scoreCenter.textContent = "Profit : " + profit;
}




for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
//Onclick

burgerButton.onclick = whenButtonClicked;
upgradeOne.onclick = whenUpgradeOneBought;
upgradeTwo.onclick = whenUpgradeTwoBought;
upgradeThree.onclick = whenUpgradeThreeBought;
upgradeFour.onclick = whenUpgradeFourBought;
upgradeFive.onclick = whenUpgradeFiveBought;
upgradeSix.onclick = whenUpgradeSixBought;
upgradeSeven.onclick = whenUpgradeSevenBought;
upgradeEight.onclick = whenUpgradeEightBought;
upgradeNine.onclick = whenUpgradeNineBought;

//other


