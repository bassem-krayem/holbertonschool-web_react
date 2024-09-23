// Define student objects
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York",
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 23,
    location: "Los Angeles",
};
// List of students
var studentsList = [student1, student2];
// Create a table element
var table = document.createElement("table");
// Create a table body
var tableBody = document.createElement("tbody");
// Loop through the studentsList and append rows to the table
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    // Create a cell for the first name
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    // Create a cell for the location
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    // Append the row to the table body
    tableBody.appendChild(row);
});
// Append the table body to the table
table.appendChild(tableBody);
// Append the table to the document body or a specific container
document.body.appendChild(table);
