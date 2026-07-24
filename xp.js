function addXP(){

let xp = Number(localStorage.getItem("xp")) || 0;
let level = Number(localStorage.getItem("level")) || 1;

xp += 10;


if(xp >= 100){

xp = 0;
level++;

}


localStorage.setItem("xp", xp);
localStorage.setItem("level", level);

alert("🔥 10 XP گرفتی!");

}
