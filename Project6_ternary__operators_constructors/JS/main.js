function Rider_Function() { //ternary operator - assigning a value to something after comparison is made or a condition is met
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voter_age() { //ternary operator - assigning a value to something after comparison is made or a condition is met
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote."; //why does this say a person can vote if letters are entered in the input box???
}

function Vehicle(Make, Model, Year, Color) { //Keywords and constructors below
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Human(Height, EyeColor, Weight) {
    this.Human_Height = Height;
    this.Human_EyeColor = EyeColor;
    this.Human_Weight = Weight;
}
var Francine = new Human("50 inches", "red", "300lbs");
var Mark = new Human("82 inches", "white", "600lbs");
var Margret = new Human("74", "green", "120lbs");
function yourfunction() {
    document.getElementById("dispraportionate").innerHTML =
    "Francine is only " + Francine.Human_Height + " tall and has " + Francine.Human_EyeColor + " colored eyes. Astonishinly she weighs " + Francine.Human_Weight;
}

function nested_function() { //function inside a function-- wish I had time to explore adding another...
    document.getElementById("counting").innerHTML = Count();
    function Count() {
        var Starting_point = 3;
        function Plus_one() {Starting_point += 1;}
        Plus_one(); //This will make the result 4
        Plus_one(); // this made it 5
        Plus_one(); // this made it 6
        Plus_one(); //this made it 7
        return Starting_point; //I would also like to see the counting being displayed in the browser...
    }
}