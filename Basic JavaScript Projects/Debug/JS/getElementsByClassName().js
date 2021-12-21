// getElementsByClassName method
function changeText() {
    var A = document.getElementsByClassName("Click");
    A [0].innerHTML = "The text has changed!"
}

// Creating graphics inside <canvas>
function draw() {
    var c = document.getElementById("ID_Name");
    var ctx = c.getContext("2d");
    // Create gradient
    var grd = ctx.createLinearGradient(0,0,200,0);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10,10,150,80);
}