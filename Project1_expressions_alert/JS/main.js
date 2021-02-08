// ------- First time practicing Java Script------ //



var B= "DONT CLICK OK... IT WILL BLOW UP YOUR COMPUTER" //-- This is defining a variable and assigning a value to it. 
window.alert(B); // This is envoking a "pop-up-box" or alert and having it us the value from variable B which was assigned above.
var B = B.fontcolor("red"); // Changed the font color for variable B

document.write("Computer blowing up in 3...2...<br>"); // having the words in side the brackets printed on the screen - or written on the screen.

var R= "kaboom<br>";
var R = R.fontcolor("aqua");
document.write(R); // having the document display on the screen the value of variable R with its associated font color.

document.write("an evil voice whispers \"Im watching you from inside of the couch\" <br> the cat jumped up and responded \"im outta her!\"<br>");

document.write(red
+ H); // multiple variables can be printed at the same time by adding the "+" symbol - I beleive this would be considered a string.

document.write("silly sammy sips,"
+ "\'' six soda's and gets "
+ " sick sick sick <br>");

var H= " billy Bonkers" + " bit the basket<br> ";
var H = H.fontcolor("green");
document.write(H);

{var green = "blue", red = "black", white = "purple" , yellow ="white"; // showing how multiple variables can be assigned at once.
var green = green.fontcolor("blue");
var red = red.fontcolor("black");
var white = white.fontcolor("purple");
var yellow = yellow.fontcolor("white");
document.write(green + red);}

document.write("4 + 4=");
document.write(4 + 4); // this is how to perform math problems 

function my_first_function() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
} // Combined with the associated html text in the connected document, this creates a function. The result equals
    // a button that when pressed changes to a different button that has no function.

function myFunction() {
    document.getElementById("demo").style.backgroundColor = "red";
} // demonstration of another HTML event - this time changing the backgroundcolor of a text box when a keyboard button is pressed.

function displayDate() {
    document.getElementById("date&Time").innerHTML = Date();
}  //this function prints below the associated button the current date and time

