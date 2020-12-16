function WhatIsIt() {       //Define a function
    var x="thirteen";           //Define a string variable
    document.write(typeof x);       //Return the type of variable
    document.getElementById("TypeOf").innerHTML = "thirteen is a " + x;         //Modify the html element to display the resulting string
}

document.write("Porsche" + 911);  //Combine a string and a number

document.write(16>5 && 4<5);      //Check if two statements are both true
document.write(5==2+3 || 6 === "six");      //Check if either of two statements is true
document.write(5 !== 2);    //Check if two values are not equal