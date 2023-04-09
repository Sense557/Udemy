function getMilk(money) 
{   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");

    console.log("buy "+ calcBottles(money, 1.5)+" bottles of milk");
    
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

    return calcChange(money,1.5);

}

console.log("Here is the " +getMilk(10,3) + " change");

//calculate no of bottles


function calcBottles(a, b) 
{
    var noOfBottles = Math.floor(a / b);
    return noOfBottles;
}

//calculate change
function calcChange(a, b) 
{
    var change = a % b;
    return change;
}

