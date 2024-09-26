"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud.js");
// Step 1: Create an object called row with the type RowElement
var row = {
    firstName: "Guillaume",
    lastName: "Salva",
};
// Step 2: Create a const variable named newRowID with the type rowId and assign the value from insertRow
var newRowID = CRUD.insertRow(row);
// Step 3: Create a const variable named updatedRow with the type RowElement and add an age field
var updatedRow = __assign(__assign({}, row), { age: 23 });
// Step 4: Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
// Test
var obj = { firstName: "Guillaume", lastName: "Salva" };
CRUD.insertRow(obj);
// Output: Insert row { firstName: "Guillaume", lastName: "Salva" }
var updatedRowForTest = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23,
};
CRUD.updateRow(newRowID, updatedRowForTest);
// Output: Update row <newRowID> { firstName: "Guillaume", lastName: "Salva", age: 23 }
CRUD.deleteRow(newRowID);
// Output: Delete row id <newRowID>
