document.write("These words are a " + typeof "word" + "<br>"); //JS determining what the type of data is placed in the quotes - either a number or string
document.write("These numbers: 1,2,3 are a class of " + typeof 3 + "<br>"); //typeof determins if the value is a word or number


function my_function() { //having JS put out a result of NaN="Not A Number"
    document.getElementById("test").innerHTML = 0/0;
}


function your_function() {
    document.getElementById("string").innerHTML = isNaN('This is a string'); //This will display TRUE because the string is not a number
}


function their_function() {
    document.getElementById("bond").innerHTML = isNaN('007'); //This would produce a result of FALSE because 007 is a number
}


document.write("This is how the number infinity is displayed: " + 2E310 + "<br>" ); //different way to print infinity and negative infinity
document.write("This is how the number negative infinity is displayed:  " + -3E310 + "<br>");



function infinity_function() {
    document.getElementById("infinity").innerHTML = (3E310); //This would produce a result of infinity because the 3E310 is to large to display
}



function neg_infinity_function() {
    document.getElementById("neg_infinity").innerHTML = (-3E310); //This would produce a result of -infinity because the 3E310 is to small to display
}

document.write("10>2 is " + (10>2) + "<br>");
document.write("10<2 is " + (10<2) + "<br>");

console.log(2 + 2); //this displayed the result of the equation in the console log shift-ctrl-i

document.write("This combined the numerals 10 and 5 together to make:" + "10" + 5 + "<br>"); //This combined a string "" and a numeral

console.log(10<2); //this made the console log display "false"

document.write("Is 10=10? " + (10 == 10) + "<br>")
document.write("Is 3=10? " + (3 == 10) + "<br>")

x= 10;
y= 10;
b= "ten";
c= "10";
a= "ten";
document.write("If x=10 and y=10 are they the same? " + (x === y) + "<br>"); // === is a comparison of type and data
document.write("If x=10 and b=ten are they the same? " + (x === b) + "<br>");
document.write("If c='10' and b=ten are they the same? " + (c === b) + "<br>");
document.write("If a=ten and b=ten are they the same? " + (a === b) + "<br>");

document.write(" 5 > 2 and 10 > 4 " + (5 > 2 && 10 > 4) + "<br>"); // boolean logic "and" both are true = true
document.write(" 5 > 10 and 10 > 4 " + (5 > 10 && 10 > 4) + "<br>"); //only one is true = false
document.write(" 5 > 10 or 10 > 4 " + (5 > 10 || 10 > 4) + "<br>"); // boolean logic "or" either can be true = true
document.write(" 5 > 10 or 10 > 20 " + (5 > 10 || 10 > 20) + "<br>"); // both are false = false

function not_function() { // Not operator "!" if a statment is false a "true" will be returned - if it is true a "false" will be returned
    document.getElementById("not").innerHTML = !(5 > 10); // this will return true
}

function notNot_function() { // Not operator "!" if a statment is false a "true" will be returned
    document.getElementById("notNot").innerHTML = !(20 > 10); //this will return false
}