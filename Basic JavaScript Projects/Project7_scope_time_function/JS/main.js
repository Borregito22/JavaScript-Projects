// Local Variable
function Basic_Math_1() {
    var X = 50;
    document.write(X + 25, "<br>");
}
Basic_Math_1();

// Global Variable
A = 30
function Basic_Math_2() {
    document.write(A + 45);    
}
Basic_Math_2();

// Using console.log() to debug
function Basic_Math_3() {
    var X = 15;
    console.log(X + 20);    
}

function Basic_Math_4() {
    console.log(X + 30)
}
Basic_Math_3();
Basic_Math_4();

// If Statements
function check_Date() {
    if (new Date().getHours() < 18.5) {
        document.getElementById("Greeting").innerHTML = "It's a fresh day."
    }
}

function morning() {
    if (new Date().getHours() < 12) {
        document.getElementById("early_bird").innerHTML = "Good morning!"
    }
}

// If Else Statement
function age_Check() {
    age = document.getElementById("age").value;
    if (age >= 25) {
        answer = "You can rent a car.";
    }
    else {
        answer = "You are not old enough to rent a car."
    }
    document.getElementById("rent").innerHTML = answer;
}

// Else If Statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's morning time!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It's afternoon.";
    }
    else {
        Reply = "It's evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}