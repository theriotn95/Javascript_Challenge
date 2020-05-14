// from data.js

var tableData = data;
console.log(tableData);

// get reference to the table body
var tbody = d3.select("tbody");


tableData.forEach(function(sighting){
    console.log(sighting);
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key,value]){
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
    
});

// Filter table button
var button = d3.select("#filter-btn");

//Filtering the data to display selected date
button.on("click", function(){
    var filteredData = tableData;
    var input = d3.select("#datetime");
    var date = input.property("value"); 
    filteredData = filteredData.filter(row => row.datetime === date);
    var tbody = d3.select("tbody");
    tbody.html("")
    filteredData.forEach(function(select){
        var row = tbody.append("tr");
         Object.entries(select).forEach(function([key,value]){
        var cell = row.append("td");
        cell.text(value);
            })
        })
    });