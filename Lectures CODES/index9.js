var bottlesCount = 99;


while (bottlesCount>=0) 
{
    var bottleWords = "bottles";
    var bottleWord = "bottle";
    var bottleWord0 = "No more bottles";
    var bottleWord01 = "no more bottles";
    
    if (bottlesCount === 1) 
        {
            console.log(bottlesCount +" "+ bottleWord +" of beer on the wall, "+ bottlesCount +" bottles of beer.");
        }
    else if (bottlesCount === 0) 
    {
        console.log(bottleWord0 +" of beer on the wall, "+ bottleWord01 +" bottles of beer.");
    }
    else
    {
         console.log(bottlesCount +" "+ bottleWords +" of beer on the wall, "+ bottlesCount +" bottles of beer.");
    }
    
    // console.log(bottlesCount +" "+ bottleWords +" of beer on the wall, "+ bottlesCount +" bottles of beer.");
    bottlesCount--;    


    if (bottlesCount === -1) 
    {
            var bottlesCount = "99";    
            var bottleString = "Go to the store and buy some more,"
    }
    console.log("Take one down and pass it around, "+ bottlesCount +" bottles of beer on the wall.");
}