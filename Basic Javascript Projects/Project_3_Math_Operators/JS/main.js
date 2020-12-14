function Add () {
    var x = 2 + 2;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + x;
}

function Subtract () {
    var x = 2 - 2;
    document.getElementById("Math2").innerHTML = "2 - 2 = " + x;
}

function Multiply () {
    var x = 2 * 2;
    document.getElementById("Math3").innerHTML = "2 * 2 = " + x;
}

function Divide () {
    var x = 2 / 2;
    document.getElementById("Math4").innerHTML = "2 / 2 = " + x;
}

function Modulus () {
    var x = 11 % 4;
    document.getElementById("Math5").innerHTML = "11 / 4 = 2 with a remainder of " + x;
}

function Increment () {
    var x = 2;
    x++;
    document.getElementById("Math6").innerHTML = "2 + 1 = " + x;
}

function Decrement () {
    var x = 2;
    x--;
    document.getElementById("Math7").innerHTML = "2 - 1 = " + x;
}

function Random () {
    var x = Math.random()
    document.getElementById("Math8").innerHTML = x;
}