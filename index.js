// <-----For dice 1------>

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDice1="/Users/priyanshusingh/Downloads/Dicee Challenge - Starting Files/images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomDice1);

// <-----For dice 2------>

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDice2="/Users/priyanshusingh/Downloads/Dicee Challenge - Starting Files/images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomDice2);
 if(randomNumber1>randomNumber2)
 {
    document.querySelector("h1").innerHTML="🥳 Player 1 Won";
 }
 else if(randomNumber1<randomNumber2)
 {
    document.querySelector("h1").innerHTML="🥳 Player 2 Won";
 }
 else {
    document.querySelector("h1").innerHTML="It's a Draw!";
 }

