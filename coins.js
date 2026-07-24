function getCoins(){

return Number(localStorage.getItem("coins")) || 100;

}



function addCoins(amount){

let coins = getCoins();

coins += amount;

localStorage.setItem(
"coins",
coins
);

}



function spendCoins(amount){

let coins = getCoins();


if(coins >= amount){

coins -= amount;

localStorage.setItem(
"coins",
coins
);

return true;

}


return false;

}
