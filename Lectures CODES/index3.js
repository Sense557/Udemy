
function lifenweeks(age) 
{
    remainingYears = 90-age;
    var days = remainingYears*365;
    var weeks = remainingYears*56;
    var months = remainingYears*12;
    console.log("You have days "+ days + ", weeks "+ weeks + ", months "+months + " left");
}

var n = prompt("Enter your age");

lifenweeks(n);