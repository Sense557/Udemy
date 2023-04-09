var output = [];

    for (var count = 1; count <= 100; count++) 
    {
        if (count % 3 === 0  && count % 5 === 0 ) 
            {
                output.push("FIzzBuzz");
            }
        else if (count % 3 === 0 ) 
            {
                output.push("FIzz");
            }
        else if (count % 5 === 0 ) 
            {
                output.push("Buzz");
            }
      
        else
            {
                output.push(count);
            }
        
    
     
}
console.log(output); 




