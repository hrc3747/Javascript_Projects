function Call_Loop() {
    var number = "";
    var x = 0;
    while (x < 10) {
        number += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = number;
}

function StringLength() {
    var String1="This is a string with some words."
    var length= String1.length;
    document.getElementById("String2").innerHTML = length;
}

var Instruments = ["Guitar", "Flute", "Violin", "Piano"];
var content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

var Dog_Breeds = ["Labrador", "Poodle", "Beagle", "Dachsund", "Airedale"];
function array_Function () {
    document.getElementById("Array").innerHTML = "I love my " + Dog_Breeds[4] + "."; 
}

const Abby_Dog = [Age = 11, Weight = 55];
Abby_Dog[1] = [Weight = 53];
Abby_Dog[2] = [Personality = "loving"];
function constant_Function() {
    document.getElementById("Constant").innerHTML = "Abby weighs " + Abby_Dog[1] + "lbs and she is " + Abby_Dog[2] +".";
}

let house = {
    city: "Denver",
    price: 600000,
    size: 2500,
    bedrooms: 4,
    bathrooms: 3,
    description : function() {
        return "This " + this.bedrooms + " bed/" + this.bathrooms + " bath house in " + this.city + " costs " + this.price + ".  It is " + this.size + " square feet for an average cost of " + this.cost/this.size + "$ per sq ft.";
    }
};
document.getElementById("Let").innerHTML = house.description();

var output = return_Function();

function return_Function() {
    return "Hello";
}

document.getElementById("return").innerHTML = output;

function break_Function() {
    var text = "";
    for (i=0; i < 5; i++) {
        if (i === 2) {break;}
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

function continue_Function() {
    var text = "";
    for (i=0; i < 4; i++) {
        if (i === 2) {continue;}
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}