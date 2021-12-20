// Counting from 990 to 1000 using a While Loop
function Call_Loop() {
    var Digit = "";
    var X = 990;
    while (X < 1001) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// Using a For Loop
var Instruments = ["Guitar", "Bass", "Drums", "Morin Khuur", "Tovshuur", "Tumur Khuur"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Creating an array
function array_Function() {
    var Countries= [];
    Countries[0] = "Switzerland";
    Countries[1] = "Germany";
    Countries[2] = "Italy";
    Countries[3] = "Greece";
    Countries[4] = "Spain";
    document.getElementById("Array").innerHTML = Countries[4];
}

// Creating an object using const
function constant_function() {
    const Cellphone = {type:"phone", brand:"Samsung", color:"Phantom Gray"};
    Cellphone.color = "Phantom Violet";
    Cellphone.price = "$1200";
    Cellphone.capacity = "128GB"
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Cellphone.type + " was " + Cellphone.price + ". It has " +
    Cellphone.capacity + " and you can get it in " + Cellphone.color;
}

// Utilizing let keyword
var X = 1538;
document.write(X);
{
    let X = 8197;
    document.write("<br>" + X);
}
document.write("<br>" + X);

// Creating an object using let
let city = {
    name: "New Orleans",
    population: "383,000",
    founded: "1718",
    elevation: "6.5'",
    description: function() {
        return "The city of " + this.name + " has a population of " +
        this.population + ". It was founded in " + this.founded +
        " and has an average elevation of " + this.elevation;
    }
}
document.getElementById("city_Object").innerHTML = city.description();