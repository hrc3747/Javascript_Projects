function Twenty() {     //Create a function
    var Y = Z + 20;     //Create a local variable
    console.log(Y);     //Output local variable to the console
}

var X = 10;     //Define a global variable

function Age_Check_Function() {     //Create a function
    Age = document.getElementById("Age").value; //Define a variable as input from browser
    if (Age >= 21) {        //Check for a condition
        Brewery = "Welcome to our brewery website";     //Assign variable if condition is met
    }

    else {
        Brewery = "Sorry, you are not old enough to view this brewery website.";  //Assign variable alternate string if condiion is not met
    }
    document.getElementById("Age_Check").innerHTML = Brewery;  //Modify HTML element to display string that variable is equal to
}

function Time_Function() {      //Create a function
    var Time =new Date().getHours();        //Check the current time
    var Reply;      //Define a variable
    if (Time < 12 == Time > 0) {        //Check whether both conditions match
        Reply = "It is morning time!";      //Set variable equal to string 
    }
    else if (Time > 12 == Time < 18) {      //Check whether both conditions match
        Reply ="It is the afternoon.";      //Set variable equal to string
    }
    else {      
        Reply = "It is evening time.";      //Set variable equal to string
    }
    document.getElementById("Time_Of_Day").innerHTML = Reply;  //Modify HTML element to show string that variable is equal to
}