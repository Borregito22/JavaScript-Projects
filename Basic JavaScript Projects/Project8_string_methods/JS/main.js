// Concatenating a quoute with .concat() method
function full_Sentence() {
    var part_1 = "\"Real travel requires a maximum of unscheduled wandering, ";
    var part_2 = "for there is no other way of discovering surprises and ";
    var part_3 = "marvels, which, as I see it, is the only good reason ";
    var part_4 = "for not staying at home.\" -Alan Watts";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Slice() method
function slice_Method() {
    var Sentence = "Arizona, Colorado, New Mexico, and Utah all meet at "
    + "four corners. This is the only place in the United States where four "
    + "states come together.";
    var Section = Sentence.slice(35, 40);
    document.getElementById("Slice").innerHTML = Section;
}

// toUpperCase() Method
function Upper() {
    var text = "I enjoy coding."
    var result = text.toUpperCase();
    document.write(result);
}
Upper();

document.write("<br>")

// search() Method
function search_Function() {
    var string = "I am a student at The Tech Academy. I plan on graduating in March."
    var position = string.search("graduating");
    document.write(position);
}
search_Function();

document.write("<br>")

// toString() Method
function string_Method() {
    var X = 34185;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// toPrecision() Method
function precision_Method() {
    var X = 235094.235430952165;
    document.getElementById("Precision").innerHTML = X.toPrecision(12);
}

// toFixed() Method
function fixed_Method() {
    var X = 374.165749841;
    document.getElementById("String").innerHTML = X.toFixed(6);
}

// valueOf() Method
function value_Method() {
    var X = -981
    document.getElementById("Primitive").innerHTML = X.valueOf();
}