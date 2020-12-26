function getReceipt() {  //Create a function to display the details of order and price
    var text1 = "<h3>You Ordered:</h3>";        //Create variables
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {  //Create a loop that will repeat based on the number of available pizza sizes
        if (sizeArray[i].checked) {  //Iterate through loop to determine selected size
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";      //Add selected size to receipt
        }
    }
    if (selectedSize === "Personal Pizza") {        //Define prices based on selected size
        sizeTotal = 6;
    }
    if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    }
    if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }
    if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }
    if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1:" + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal, text1);
};

function getTopping (runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];       //Assign an object to hold the topping options
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {     //Iterate through loop to determine which toppings are selected
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);        //Store seleted toppings in object
            console.log( "selected topping item: (" + toppingArray[j].value +")" );
            text1 = text1 + toppingArray[j].value + "<br>";     //Add selected toppings to receipt
        }
    }
    var toppingCount = selectedTopping.length;      //Define a variable that equals number of toppings selected
    if ( toppingCount > 1) {        //Determine number of toppings to charge for, first topping is free
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log( toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log ( "topping text1: " + text1);
    console.log ("Purchase total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;      //Replace HTML element with receipt text
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";     //Replace HTML element with total cost
};