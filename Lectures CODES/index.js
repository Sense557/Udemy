prompt("What is your name?");
prompt("What is their name?");

var lovescore = Math.random()*100;
lovescore = Math.floor(lovescore)+1;  //1-100

if(lovescore >50)
{
    alert("Your lovescore is "+ lovescore +"% "+" (You both love each other)");
}else{
    alert("Your lovescore is "+ lovescore +"% ");
}

alert("Your lovescore is "+ lovescore + "%");

console.log(lovescore);