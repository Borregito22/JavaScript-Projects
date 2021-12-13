// Changes font color to blueviolet
function blue_text() {
    var str = "Escape From Tarkov is a great game.";
    var result = str.fontcolor("blueviolet");
    document.getElementById("color_text").innerHTML = result;
}

// Concatenated string using += operator
function myFunction() {
    var sentence = "My goal is to graduate in March";
    sentence += " from The Tech Academy.";
    document.getElementById("concatenate").innerHTML = sentence;
}