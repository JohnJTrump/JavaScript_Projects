function full_sentence() { //concatenating a sentence = joining variables together to produce a result.
    var part_1 = "I have ";
    var part_2 = "socks on ";
    var part_3 = "my feet, ";
    var part_4 = "how about you?";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //slice removes and prints a portion of a string
    var Sentence = "All work and no play maked Johnny a dull boy.";
    var Section = Sentence.slice(27,33); //This is where you designate what is being remove- from place 27 to place 33 will be the only thing printed
    document.getElementById("slice").innerHTML = Section;
}

function Convert_Function() { //change all of the text to uppercase
    var text = document.getElementById("convert").innerHTML;
    document.getElementById("convert").innerHTML = text.toUpperCase();
}

function search_Function() { //determines the number placement of an object in the string
    var str = "Press the button below to output the number postion of Ratitoui in this sentence." ;
    var pos = str.search("Ratitoui"); // Ratitoui is what was searched for to determing its position in the above string
    document.getElementById("search").innerHTML = pos;
}

function string_Method() { //not positive - just looks like a variable was printed in a complicated way
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //this will pare down a number to a set amount of numbers
    var X =56017.8943299; //output of this will be "56017.894" '8 numbers long'
    document.getElementById("precision").innerHTML = X.toPrecision(8);//8 is the set amount of numbers here
}

function Rounder_Function() { // this function will shorten a variable to a specific place
    var num = 4.3691383;
    var n = num.toFixed(3); // "3" here is the specific place which it will shorten it, and round to -> the thousandths place
    document.getElementById("rounded").innerHTML = n; 
}

function Primitive_Function() { // sounds like this is something which happens behind the scenes, not actually included in code
    var str = "primitive";
    var res = str.valueOf();
    document.getElementById("primitive").innerHTML = res; 
}
