var Sentence = "This is a string.";     //Create a global variable

function Slicer() {     //Create a function
    var Sliced = Sentence.slice(10,16);     //Create a local variable that uses the slice method on a global variable
    document.getElementById("Slice").innerHTML = Sliced;        //Modify the HTML element to display the local variable
}

function UpperCase() {      //Create a function
    var Upper = Sentence.toUpperCase();     //Create a local variable that uses uppercase method on a global variable
    document.getElementById("ToUpperCase").innerHTML = Upper;       //Modify the HTML element to display the local variable
}

function StringSearch() {       //Create a function
    var Searched = Sentence.search(/string/);       //Create a local variable that uses the search method on a global variable
    document.getElementById("Search").innerHTML = Searched;     //Modify the HTML element to display the local variable
}

function TurnToString() {       //Create a function
    var X = 1000;       //Assign a local variable
    document.getElementById("ToString").innerHTML = X.toString();       //Modify the HTML element to display the result of performing the to string method on the local variable
}

function MakePrecise() {        //Create a function
    var X = 34237902579.6432;       //Assign a local variable
    document.getElementById("ToPrecision").innerHTML = X.toPrecision(13);       //Modify the HTML element to display the result of performing the to precision method on the local variable
}

function Fixed() {      //Create a function
    var X = 34237902579.6432;       //Assign a local variable
    document.getElementById("ToFixed").innerHTML = X.toFixed(3);        //Modify the HTML element to display the result of performing the to fixed method on the local variable
}

function ValueOf() {        //Create a function
    var X = 3426        //Assign a local variable
    document.getElementById("Value").innerHTML = X.valueOf();       //Modify the HTML element to display the result of performing the value of method on the local variable
}

function ConcatStrings() {     //Create a function
    var String_1 = "I can write a function";        //Create local variables
    var String_2 = " that combines strings.";
    var Combined = String_1.concat(String_2);     //Create a local variable that uses the concat method on local variables
    document.getElementById("Concatenate").innerHTML = Combined;        //Modify the HTML element to display a local variable
}