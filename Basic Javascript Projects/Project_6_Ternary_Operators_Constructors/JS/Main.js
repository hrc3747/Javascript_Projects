function Vote_Function() {      //Create a function
    var Age, Can_Vote;      //Assign variables
    Age = document.getElementById("Age").value;     //Set variable equal to value from browser
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";       //User ternary operator based on value from browser
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";     //Display string with result from ternary operator
}

function Vehicle(Make, Model, Year, Color) {        //Write a constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");      //Create new objects
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function MyFunction() {     //Create a function
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;        //Modify the HTML element to show a string built from object values
}

function OuterFunction() {      //Define outer function
    document.getElementById("Nested_Function").innerHTML = InnerFunction();  //Modify HTML element to reflect value of inner function
    function InnerFunction() {      //Define nested function
        var Age = 21;       //Define a variable
        function Age_Up() {     //Define another layer of nested function
            Age += 1;       //Perform math operation on a variable
        }
        Age_Up();       //Call a function
        return Age;     //Return modified variable
    }
}