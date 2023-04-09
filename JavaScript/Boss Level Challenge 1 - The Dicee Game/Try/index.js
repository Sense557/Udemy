
// ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
//for player 1 changing the dice images
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImages = "dice"+ randomNumber1 + ".png";
var ramdomImageSource = "images/" + randomDiceImages; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", ramdomImageSource);

// ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️


// 🏉🏉🏉🏉🏉🏉🏉short hand type🏉🏉🏉🏉🏉🏉🏉
// document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + (Math.floor(Math.random()*6)+1) + ".png");
// 🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉


// ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
//for player 2 changing the dice images
var randomNumber2 = Math.floor(Math.random()*6)+1;
var ramdomImageSource2 = "images/dice"+ randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", ramdomImageSource2);

// ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️


// 🏉🏉🏉🏉🏉🏉🏉short hand type🏉🏉🏉🏉🏉🏉🏉
//changing the dice images for player 2 using the random accouding to the number
// document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + (Math.floor(Math.random()*6)+1) +".png")
// 🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉🏉



//setting conditions for changing the inner html according to the number
if (randomNumber1 > randomNumber2) 
{
    document.querySelector("h1").innerHTML = "🏆 Player1 Won ";    
}
else if (randomNumber1 < randomNumber2) 
{
    document.querySelector("h1").innerHTML = "Player 2 won 🏆";
}
else
{
    document.querySelector("h1").innerHTML = "🏆 Draw 🏆";
}