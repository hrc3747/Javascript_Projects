function Call_Loop() {      //Create a function
    var number = "";        //Define a localvariable
    var x = 0;      //Assign a local variable
    while (x < 10) {        //Create a while loop
        number += "<br>" + x;       //Set local variable to display a break before the x variable
        x++;        //Increment the variable
    }
    document.getElementById("Loop").innerHTML = number;     //Modify the html element to display the variable after iterating through the loop
}

function StringLength() {       //Define a function
    var String1="This is a string with some words."     //Assign a local variable equal to a string
    var length= String1.length;     //Assign another local variable equal to the string length of a variable
    document.getElementById("String2").innerHTML = length;      //Modify the HTML element to show the string length variable
}

var Instruments = ["Guitar", "Flute", "Violin", "Piano"];       //Create an object
var content = "";       //Define global variables
var Y;
function for_Loop() {       //Create a function
    for (Y = 0; Y < Instruments.length; Y++) {      //Use a for loop to iterate for Y based on number of values in the object
        content += Instruments[Y] + "<br>";     //Add values from object to variable, separated by a break
    }
    document.getElementById("List_of_Instruments").innerHTML = content;  //Modify HTML element to display variable containing list of values
}

var Dog_Breeds = ["Labrador", "Poodle", "Beagle", "Dachsund", "Airedale"];      //Create an array
function array_Function () {        //Create a function
    document.getElementById("Array").innerHTML = "I love my " + Dog_Breeds[4] + ".";   //Modify HTML element to display string using selected value from array
}

const Abby_Dog = [Age = 11, Weight = 55];      //Create a constant array
Abby_Dog[1] = [Weight = 53];        //Modify value of a property from the constant array
Abby_Dog[2] = [Personality = "loving"];     //Add a property and value to the constant array
function constant_Function() {      //Create a function
    document.getElementById("Constant").innerHTML = "Abby weighs " + Abby_Dog[1] + "lbs and she is " + Abby_Dog[2] +".";        //Modify the HTML element to show the resulting string including values from the array
}

let house = {       //Use let to create an object
    city: "Denver",     //Define object properties and values
    price: 600000,
    size: 2500,
    bedrooms: 4,
    bathrooms: 3,
    description : function() {      //Define a function as a method for the object
        return "This " + this.bedrooms + " bed/" + this.bathrooms + " bath house in " + this.city + " costs " + this.price + ".  It is " + this.size + " square feet for an average cost of " + this.cost/this.size + "$ per sq ft.";
    }
};
document.getElementById("Let").innerHTML = house.description();     //Modify the html element to show the string created by the object method (not displaying in browser - needs to be fixed)

var output = return_Function();     //Create a variable and set it equal to the output of a function

function return_Function() {        //Define a function
    return "Hello";     //Return a string
}

document.getElementById("return").innerHTML = output;       //Modify HTML element to display the variable that represents the output of a function (not displaying in browser - needs to be fixed)

function break_Function() {     //Create a function
    var text = "";      //Define a variable
    for (i=0; i < 5; i++) {     //Create a for loop that iterates for i
        if (i === 2) {break;}       //Break iteration when i reaches specified value
        text += "The number is " + i + "<br>";      //Edit variable to add string and break for each iteration of the loop
    }
    document.getElementById("break").innerHTML = text;      //Modify HTML element to show variable after iterating through loop until break
}

function continue_Function() {      //Create a function
    var text = "";      //Define a variable
    for (i=0; i < 4; i++) {     //Create a for loop that iterates for i
        if (i === 2) {continue;}        //Continue iteration to skip over specified value of i
        text += "The number is " + i + "<br>";  //Edit variable to add string and break for each iteration of the loop
    }
    document.getElementById("continue").innerHTML = text;       //Modify HTML element to show variable after iterating through loop until break
}