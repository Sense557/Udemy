var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];


function whoPaying(names) 
{
    

    // var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random()* names.length);
    var nameOfPosition = names[randomPersonPosition];


    return nameOfPosition +" is going to buy lunch today!";

}

whoPaying(names);