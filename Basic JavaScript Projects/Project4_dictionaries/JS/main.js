// Function to create a dictionary
function my_Dictionary() {
    var Computer= {
        DS: "Desktop",
        MB: "Motherboard",
        CPU: "Central Processing Unit",
        GPU: "Graphics Processing Unit",
        HD: "Hard Drive",
        SSD: "Solid State Drive",
        RAM: "Random Access Memory"
    }
    delete Computer.MB // Deletes an entry in the dictionary
    document.getElementById("Dictionary").innerHTML = Computer.MB;
}