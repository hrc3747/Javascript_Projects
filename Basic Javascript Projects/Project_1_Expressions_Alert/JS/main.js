var Family= "Us", Human = "Renee", Dog = "Abby";     //Defining variables
var Human = Human.fontcolor("pink");    //Using the fontcolor method on variables
var Dog = Dog.fontcolor("purple");
var Family = Family.fontcolor("green");
var intro = "My name is " + Human +" and my favorite pet is " + Dog + ".";    //Concatenating two variables with strings
document.write(intro) //Using the document write method on an expression
window.alert("Welcome!")   //Using the window alert method on a string

function sayHello() {
    window.alert("Hello!")
}