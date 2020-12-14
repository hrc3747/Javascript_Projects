function Add () {       //Create addition function
    var x = 2 + 2;      //Assign a variable with addition operation
    document.getElementById("Math1").innerHTML = "2 + 2 = " + x;        //Modify the html element to show the result of addition
}

function Subtract () {      //Create subtraction function
    var x = 2 - 2;      //Assign a variable with subtraction operation
    document.getElementById("Math2").innerHTML = "2 - 2 = " + x;        //Modify the html element to show the result of subtraction
}

function Multiply () {      //Create multiplication function
    var x = 2 * 2;      //Assign a variable with multiplication operation
    document.getElementById("Math3").innerHTML = "2 * 2 = " + x;        //Modify the html element to show the result of multiplication
}

function Divide () {        //Create a division function
    var x = 2 / 2;      //Assign a variable with division operation
    document.getElementById("Math4").innerHTML = "2 / 2 = " + x;        //Modify the html element to show the result of division
}

function Modulus () {       //Create a modulus function
    var x = 11 % 4;     //Assign a variable with modulus operation
    document.getElementById("Math5").innerHTML = "11 / 4 = 2 with a remainder of " + x;     //Modify the html element to show the result of modulus
}

function Increment () {     //Create an increment function
    var x = 2;      //Assign a variable
    x++;        //Increment the variable
    document.getElementById("Math6").innerHTML = "2 + 1 = " + x;        //Modify the html element to show the result of incrementing the variable
}

function Decrement () {     //Create a decrement function
    var x = 2;      //Assign a variable
    x--;        //Decrement the variable
    document.getElementById("Math7").innerHTML = "2 - 1 = " + x;        //Modify the html element to show the result of decrementing the variabe
}

function Random () {  //Create a random number function
    var x = Math.random()       //Assign a variable and generate a random number
    document.getElementById("Math8").innerHTML = x;     //Modify the html element to shoe the result of generating a random number
}