// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Define student objects
let student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "New York",
};

let student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 23,
  location: "Los Angeles",
};

// List of students
const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");

// Create a table body
const tableBody = document.createElement("tbody");

// Loop through the studentsList and append rows to the table
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  // Create a cell for the first name
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  // Create a cell for the location
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});

// Append the table body to the table
table.appendChild(tableBody);

// Append the table to the document body or a specific container
document.body.appendChild(table);
