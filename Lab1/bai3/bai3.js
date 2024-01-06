fetch('https://api.publicapis.org/entries')
    .then(function (response) {
        response.json().then(function (data) {
            let api = '';
            console.log(data);
            const apiData = data.entries;
            for (let i = 0; i < 10; i++) {
                api += `
            <tr>
                <td>${i + 1}</td>
                <td>${apiData[i].API}</td>
                <td>${apiData[i].Auth}</td>
                <td>${apiData[i].Cors}</td>
                <td>${apiData[i].Category}</td>
                <td>${apiData[i].Description}</td>
                <td>${apiData[i].HTTPS}</td>
                <td>${apiData[i].Link}</td>
            </tr>
        `;
            }
            document.getElementById('tableBody').innerHTML = api;
        })
    })
    .catch(function (error) {
        console.error('Fetch error:', error);
    });

var name1 = "Mạnh";
var tuoi = 21;
var sayHello1 = function () {
    console.log(`Ten tui la ${name1}. tuoi tui la ${tuoi}`);
}
var displayData = function (data) {
    var outputElement = document.getElementById("output");
    outputElement.innerHTML = data;
}
sayHello1();
sayHello1(name1 = "Minh", tuoi = 19); 