var slideIndex = 1;         //Define a global variable
showSlides(slideIndex);     //Call a function

// Next/previous controls
function plusSlides(n) {        //Create a function
    showSlides(slideIndex += n);        //Call a function to change which slide is displayed (previous or next)
}

// Thumbnail image controls
function currentSlide(n) {      //Create a function
    showSlides(slideIndex = n);     //Call a function to jump to a given slide (based on dot click)
}

function showSlides(n) {        //Create a function
    var i;      //Define a local variable
    var slides = document.getElementsByClassName("mySlides");  //Create an object from the HTML elements with given class name
    var dots = document.getElementsByClassName("dot");      //Create an object from the HTML elements with given class name
    if (n > slides.length) {slideIndex = 1}  //Display first slide if maximum number of slides is exceed
    if (n < 1) {slideIndex = slides.length}  //Display selected slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  //Set all slides to not display
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");  //Set dot that corresponds to current slide to active class
    }
    slides[slideIndex-1].style.display = "block";  //Set current slide to display in block format
    dots[slideIndex-1].className += " active";      //Set dot to active class
}

//Countdown timer

function countdown() {  //Create a function
    var seconds = document.getElementById("seconds").value;  //Define local variable and set equal to value from broswer

    function tick() {  //Create a nested funtion
        seconds = seconds - 1;      //Decrease variable by 1
        timer.innerHTML = seconds;  //Display variable in browser
        setTimeout(tick,1000);      //Countdown by 1000 milliseconds
        if(seconds == -1) {
            alert("Time's up!");        //Display pop-up window with message
        }
    }
    tick();     //Call a function
}