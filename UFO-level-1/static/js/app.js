// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

console.log(tableData);

tableData.forEach((ufoSighting) => {
    console.log(ufoSighting);
    var row = tbody.append("tr")

    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    })

});

var form = d3.select("#form");

form.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
    console.log(inputValue)
}