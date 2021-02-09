function addition_function() { //addition
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 =" + addition;
}

function subtraction_function() { //subtraction
    var subtraction = 4 - 2;
    document.getElementById("subtract").innerHTML = "4 - 2 =" + subtraction;
}

function multiplication() { //multiplication
    var simple_Math = 2 * 2;
    document.getElementById("multiply").innerHTML = "2 x 2 =" + simple_Math;
}

function division() { //division
    var simple_Math = 4 / 2;
    document.getElementById("division").innerHTML = "4 / 2 =" + simple_Math;
}

function more_Math() { //multi fucntion math
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Combo").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}

function modulus_Operator() { //operations with remainders
    var simple_Math = 25 % 6;
    document.getElementById("remainders").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() { //making the variable opposite  I.E.  this 10 changes to a -10
    var x = 10;
    document.getElementById("opposites").innerHTML = -x;
}

document.write("This is an increment operation of 5 <br>")
var X = 5; //adds a single incriment to the variable I.E. 5 + 1 = 6
X++
document.write(X);

document.write("<br>This is a decrement operation of 5.25 <br>");

var Y = 5.25; // subtracts a single incriment: 5.25 - 1 = 4.25
Y--;
document.write(Y);

document.write("<br>");

document.write("<br>below is a random number generated<br>");
document.write(Math.random()); //generates a random number

document.write("<br>");

document.write("<br> below is a random number generated between 0 and 50<br>");
document.write(Math.random() * 50); //generates a random number from 0 to 50

document.write("<br>");

function myFunction() { //This operation will determine the lowest number in the string
    document.getElementById("lowest").innerHTML = Math.min(56, 7, 1.35, 700, 25);
}

document.write("<br>below is the numeral 5.3785 rounded to its nearest deceimal</br>");
document.write(Math.round(5.3785)); //This will round the number you choose to the nearest whole number
document.write("<br>");