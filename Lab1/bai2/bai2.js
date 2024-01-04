var name1 = "Hung";
var tuoi = 36;
var sayHello1 = function () {
    console.log(`Ten tui la ${name1}. tuoi tui la ${tuoi}`);
}
var displayData = function (data) {
    var outputElement = document.getElementById("output");
    outputElement.innerHTML = data;
}
sayHello1();
sayHello1(name1 = "Minh", tuoi = 19); 