// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

console.log(tableData);

function buildTable(tableData) {

tbody.html("")

tableData.forEach((ufoSighting) => {
    console.log(ufoSighting);
    var row = tbody.append("tr")

    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    })

});
};

buildTable(tableData);

var button = d3.select("#filter-btn");
var input = d3.select("#form");

button.on("click", runEnter);
input.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(entered => entered.datetime === inputValue);
    console.log(filteredData);

    buildTable(filteredData);

};

// Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

// date/time
// city
// state
// country
// shape