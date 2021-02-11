function Call_Loop() { // While loop that counts to ten
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function count_function() { //This fucntion counts the number of characters in a string
    var str = "From here to there From there to here Funny things are everywhere.";
    var n = str.length;
    document.getElementById("counted").innerHTML = n;
}

//This will print a verticle list of the below fruit
var Fruit = ["grape", "plum", "kiwi", "tangerine", "tomato", "persimmon", "cantelope"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Fruit.length; Y++) {
        Content += Fruit[Y] + "<br>";
    }
    document.getElementById("List_of_Fruit").innerHTML = Content;
}

function Pictures_of_Hair() { //This is a way to apply individual titles to a variable list and print text utilizing the variables
    var Hair_Picture = [];
    Hair_Picture[0] = "braided";
    Hair_Picture[1] = "mo-hawk";
    Hair_Picture[2] = "perm";
    Hair_Picture[3] = "dread-locks";
    document.getElementById("hair").innerHTML = "In this picture, the persons hair is styled in " +
        Hair_Picture[1] + ".";
}

function constant_function() { //constant function with objects being added after intitial creation
    const Turkey_Sandwich = {bread:"rye", topping:"cucumber", sauce: "mustard"};
    Turkey_Sandwich.bread = "pumpernickle"
    Turkey_Sandwich.price = "$12.95"
    document.getElementById("constant").innerHTML = "The cost of the sandwich with " +
         Turkey_Sandwich.bread + " bread and " + Turkey_Sandwich.topping + " and " +
         Turkey_Sandwich.sauce + " will cost " + Turkey_Sandwich.price;  
}

//this block of code demonstrates the use of 'let' as a variable
// and how it can use the same declared object as a variable
// but will not change it globally if its inside a curley bracket 
var y ="fluffing";
function get_function() {
document.write(y);
{
    let y ="mcfluffing";
    document.write("<br>" + y);
}
document.write("<br>" + y);
document.getElementById("get");
}


//this block of code demonstrates the use of 'var' in and out of curly brackets 
// and how it is not immutable like 'let' is inside curley brackets. when 'var'
// is changed in our out of curley brackets, it changes it globally. 
var x ="busy bee"; //this becomes undefined when displayed because it gets changed i the curly bracket
function Let_function() {
document.write(x);
{
    var x ="tree";
    document.write("<br>" + x);
}
document.write("<br>" + x);
document.getElementById("let");
}

//Returns example one
var R = myFunction(2, 4);
function myFunction(a, b) {
    return a * b;
};
document.getElementById("returns").innerHTML = R;



//Returns example two
function ThisFunction(name) {
    return "Grettings " + name + ", you are stuck in mud!";
};
document.getElementById("different").innerHTML = ThisFunction("Roger");

let tree = { //utilising "Let" and "This"
    species: "deciduous",
    age: "600",
    color: "green",
    diet: "natural elements",
    descrition : function() {
        return "A Bald Cypress is a " + this.species + " tree, that can live as long as " +
        this.age + " years old. Their leaves are often " + this.color + ", and their diet consists of the "
        + this.diet + " surronding them."
    }
};
document.getElementById("giants").innerHTML = tree.descrition();

// break and continue statments in a loop. Break will stop and exit the loop
// Continue will keep going in the loop

var text = "";
var G; 
for (G = 0; G < 15; G++) { //if break was not entered the loop would count up to 15
    if (G === 5) { break; } //this will stop the loop and exit at numeral 5
    text += "The number is " + G + "<br>";
}
document.getElementById("Break").innerHTML = text;

var text = "";
var Z; 
for (Z = 0; Z < 8; Z++) {
    if (Z === 2) { continue; } //this loop will skip the numeral 3
    text += "The number is " + Z + "<br>";
}
document.getElementById("Continue").innerHTML = text;