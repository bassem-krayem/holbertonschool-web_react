/// <reference path="./crud.d.ts" />
import { RowElement, rowId } from "./interface"; // Make sure 'rowId' is the correct name
import * as CRUD from "./crud.js";

// Step 1: Create an object called row with the type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Step 2: Create a const variable named newRowID with the type rowId and assign the value from insertRow
const newRowID: rowId = CRUD.insertRow(row);

// Step 3: Create a const variable named updatedRow with the type RowElement and add an age field
const updatedRow: RowElement = {
  ...row, // Spread the existing row properties
  age: 23, // Add the age field
};

// Step 4: Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

// Test
const obj: RowElement = { firstName: "Guillaume", lastName: "Salva" };
CRUD.insertRow(obj);
// Output: Insert row { firstName: "Guillaume", lastName: "Salva" }

const updatedRowForTest: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};
CRUD.updateRow(newRowID, updatedRowForTest);
// Output: Update row <newRowID> { firstName: "Guillaume", lastName: "Salva", age: 23 }

CRUD.deleteRow(newRowID);
// Output: Delete row id <newRowID>
