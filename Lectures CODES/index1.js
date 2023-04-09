var lovescore = Math.random()*100;
lovescore = Math.floor(lovescore)+1;
console.log("Your Lovescore is "+lovescore+"%");

if (lovescore>70) {
    alert("Your lovescore is "+lovescore+"%"+"You both are going to marry.");
}

if (lovescore>30 && lovescore < 70) {
    alert("Your lovescore is "+lovescore+"%");
}

if (lovescore<=30) {
    alert("Your lovescore is "+lovescore+"%"+"You are like oil and water");
}


