function displayDate() {    //Creating a function that displays the date
    document.getElementById("project2").innerHTML = Date(); //Modifying the html element project2
}

function myFunction() {         //Creating a new function
    var sentence = "I am writing some code ";       //Creating a variable and setting it equal to a string
    sentence += "that I learned at the Tech Academy";       //Concatenating the variable with another string
    document.getElementById("concatenate").innerHTML = sentence;        //Modifying the html element concatenate to show the resulting string
}