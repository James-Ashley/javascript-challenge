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
var button = d3.select("#filter-btn");
var form = d3.select("#filters");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter((entered) => entered.date === inputValue);
    console.log(filteredData);

};