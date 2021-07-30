var dice1=Math.floor(Math.random(1,7)*6)+1;
var dice2=Math.floor(Math.random(1,7)*6)+1;
document.querySelector("#dice1 img").setAttribute("src","images/dice"+dice1+".png");
document.querySelector("#dice2 img").setAttribute("src","images/dice"+dice2+".png");
if(dice1>dice2)
{
document.querySelector("h1").textContent="🚩Player1 Wins";
}else if(dice1<dice2)
{
document.querySelector("h1").textContent="🚩Player2 Wins";
}
else
{
document.querySelector("h1").textContent="Draw📍";
}