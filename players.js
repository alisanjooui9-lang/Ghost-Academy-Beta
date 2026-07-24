let players = JSON.parse(localStorage.getItem("players")) || [];


function addPlayer(){

let name = localStorage.getItem("username") || "بازیکن ناشناس";

let xp = Number(localStorage.getItem("xp")) || 0;

let level = Number(localStorage.getItem("level")) || 1;



let player = {

name:name,
xp:xp,
level:level

};



players.push(player);


localStorage.setItem(
"players",
JSON.stringify(players)
);


}
