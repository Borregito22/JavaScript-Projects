// Ternary Operator "?"
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Keywords
function Gun(Type, Model, Caliber, Weight, Barrel) {
    this.Gun_Type = Type;
    this.Gun_Model = Model;
    this.Gun_Caliber = Caliber;
    this.Gun_Weight = Weight;
    this.Gun_Barrel = Barrel;
}

var Robbie = new Gun("Shotgun", "590A1", "12 Gauge", "7.25 lbs", "20\"");
var Travis = new Gun("AR Pistol", "Saint Victor", "5.56", "5.5 lbs", "7.5\"");
var Zane = new Gun("Pistol", "Glock 17", "9mm", "1.5 lbs", "4.49\"");
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Robbie bought himself a " + Robbie.Gun_Model + " " + Robbie.Gun_Type + ". " +
    "It's a " + Robbie.Gun_Caliber + " and weighs " + Robbie.Gun_Weight;
}

// Nested Function
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 851953;
        function Plus_Amount() {Starting_point += 148047;}
        Plus_Amount();
        return Starting_point;
    }
}