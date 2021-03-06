// Makes a pop up box that says "Hello, World!"
var A = "Hello, World!"
window.alert(A);

// Writes out text utilizing the \ to add marks
var X = "This string has an apostrophe (\') and quotation marks (\").";
document.write(X);

document.write("<br>") // Inserts a line break

document.write("\"We are living in a culture entirely hypnotized by the"
+ " illusion of time, in which the so-called present moment is felt as"
+ " nothing but an infintesimal hairline between an all-powerfully"
+ " causative past and an absorbingly important future. We have no"
+ " present. Our consciousness is almost completely preoccupied with"
+ " memory and expectation. We do not realize that there never was, is,"
+ " nor will be any other experience than present experience. We are"
+ " therefore out of touch with reality. We confuse the world as talked"
+ " about, described, and measured with the world which actually is. We"
+ " are sick with a fascination for the useful tools of names and numbers,"
+ " of symbols, signs, conceptions and ideas.\""
+ " -Alan Watts");

document.write("<br>")

// Concatenating two strings using +
var B = "Concatenated"
var C = " String"
document.write (B + C)

document.write("<br>")

// Assigning multiple variable in one statement
var Family = "The Griffins", Dad = "Peter", Mom = "Lois",
    Daughter = "Meg", Son1 = "Chris", Son2 = "Stewie", Pet = "Brian";
var Family = Family.fontcolor("green");
var Dad = Dad.fontcolor("violet");
var Mom = Mom.fontcolor("yellow");
var Daughter = Daughter.fontcolor("blue");
var Son1 = Son1.fontcolor("green");
var Son2 = Son2.fontcolor("red")
document.write(Dad);

document.write("<br>")

// An expression
document.write(351+891)

document.write("<br>")

// JavaScript Event
function displayDate() {
    document.getElementById("time").innerHTML = Date();
}