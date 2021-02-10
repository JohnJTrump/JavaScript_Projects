var x = 10; //assining a global variable(will work in all of script)
function Add_numbers_1() {
    document.write(20 + x + "<br>"); //using global variable to perfomr equations
}
function Add_numbers_2() {
    document.write(x + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_3() { //assinged a local or nested variable which will only work inside this function
    var y = 10;
    document.write(20 + y + "<br>"); //performed an equation with the local variable
    console.log(20 + y);
}
function Add_numbers_4() {
    document.write(y + 100 + "<br>"); //showing how local variable from function Add_numbers_3 does not work in this function
    console.log(y + 100); //used console log to see the error of why this did not produce a result
}
Add_numbers_3();
Add_numbers_4();

function get_Date(){
    if (new Date().getHours() >10) { //if the current time is after 10:00am, when the button is pressed it will display "The current time is after 10am" 
    document.getElementById("greeting").innerHTML = "The current time is after 10am";
    }
}

function get_Year(){
    if (new Date().getFullYear() >2020) { //If the year is greater than 2020, when button is pressed it will display "Its the year 2021"
        document.getElementById("display").innerHTML = "Its the year 2021";
    }
}

function Age_Function() { // if-else statement displaying an associated message with an age range
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Height_function() { //if-else statement/function determining if height is correct for a ride 
    Height = document.getElementById("Height").value;
    if (Height >= 64) {
        output = "You are to tall for this ride";
    }
    else {
        output = "You are just the right size for this ride";
    }
    document.getElementById("How_tall_are_you?").innerHTML = output;
}

function Time_function() { //if-elseIf-else statement/function using the internal time from computer to provide specific time of day greeting
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Its morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "Its the afternoon.";
    }
    else {
        Reply = "Its evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}