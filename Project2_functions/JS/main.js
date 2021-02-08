//function myFunction() {
    //document.getElementById("date_and_time").style.backgroundColor = "red";
//}       //-----this did not work because it doesnt have a text box to change colors
        //-----not sure I can change the background color of the button
        //-----trying not to dive to deep in to this since I am behind in studies



function displayDate() {
    document.getElementById("date_and_time").innerHTML = Date(); //this displays the date and time when a button is pressed
} 

var brown = "brown", orange = "orange"; // showing how multiple variables can be assigned at once.
var brown = brown.fontcolor("brown");
var orange = "orange";
var orange = orange.fontcolor("orange");

document.write("the dog is " + brown + " the cat is " + orange);


function myFunction() { //this will join the two strings of texts below when a button is pressed
    var sentence = "Question: Why do cows wear bells?  ";
    sentence += "   Answer: Because their horns dont work.";
    document.getElementById("concatenate") .innerHTML = sentence;
}