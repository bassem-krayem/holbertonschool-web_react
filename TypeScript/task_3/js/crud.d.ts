import { rowId, RowElement } from "./interface";

// Function to insert a row, expects RowElement and returns a rowId
export function insertRow(row: RowElement): rowId;

// Function to delete a row, expects rowId as a number
export function deleteRow(rowId: rowId): void;

// Function to update a row, expects rowId as a number and row as RowElement
export function updateRow(rowId: rowId, row: RowElement): rowId;
