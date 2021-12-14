// Addition Function
function Addition_Function() {
    var addition = 22 + 24;
    document.getElementById("Math").innerHTML = "22 + 24 = " + addition;
}

// Subtraction Function
function Subtraction_Function() {
    var subtraction = 156 - 77;
    document.getElementById("subtract").innerHTML = "156 - 77 = " + subtraction;
}

// Multiplication Function
function multiplication() {
    var multiplication = 17 * 36;
    document.getElementById("multiply").innerHTML = "17 * 36 = " + multiplication;
}

// Division Function
function division() {
    var division = 5793 / 42;
    document.getElementById("divide").innerHTML = "5793 / 42 = " + division;
}

//Multiplication Function
function multiple_operations() {
    var operations = 16 * 14 / 2 + 15 - 40;
    document.getElementById("multiple").innerHTML = "16 times 14, divided by 2, plus 15, minus 40 = " + operations;
}

// Modulus Function
function modulus_operator() {
    var remainder = 516 % 14;
    document.getElementById("modulus").innerHTML = "The remainder of 516 / 14 is: " + remainder;
}

// Negation Function
function negation_operator() {
    var A = 1124;
    document.getElementById("negation").innerHTML = "The opposite of 1124 is: " + -A;
}

// Increment Function
var X = 99;
X++;
document.write(X)

document.write("<br>")

// Decrement Function
var Y = 1;
Y--;
document.write(Y)

// Pop up with random number between 0 and 100
window.alert(Math.random() * 100);

// Math.pow Function
function x_y() {
    document.getElementById("power").innerHTML = "7 to the power of 4 is = " + Math.pow(7, 3);
}