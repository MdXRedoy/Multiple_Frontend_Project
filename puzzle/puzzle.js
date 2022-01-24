//This is a group project for team #2

//creating puzzle function
function puzzle (number) {
    
    //creating loop
    for (i=1; i <= number; i++) {
        //checking by boolean operator if the remainder of 'i' is divided by 5 or 3
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('Fizz Buzz')
        }
        //checking if the remainder of 'i' is divided by 5 or not
        else if (i % 5 == 0) {
            console.log('Buzz')
        }
        //checking if the remainder of 'i' is divided by 3 or not
        else if(i % 3 == 0) {
            console.log('Fizz')
        }
        // for all other number
        else {
            console.log(i)
        }
    }
    
}

puzzle(100)