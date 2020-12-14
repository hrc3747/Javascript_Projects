function BeerDictionary() {     //Define a dictionary function
    var BeerPrices = {      //Assign a variable to the dictionary of beer prices
        Ale: "$3.25",       //Beer types are assigned to keys and prices entered as pairs
        Lager: "$3.00",
        Stout: "$4.00",
        IPA: "$5.00",
        IPA: "$6.00",      //Duplicate IPA key with a different value
        Sour: "$5.75",
    };
    delete BeerPrices.IPA;      //Remove the IPA price from the menu
    document.getElementById("Dictionary").innerHTML = "An IPA costs " + BeerPrices.IPA;     //Modify the HTML element with the value from the dictionary for the selected key
}