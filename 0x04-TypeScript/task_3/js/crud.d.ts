import { RowID, RowElement } from "./interface";

export function insertRow(row: RowElement): number;

export function deletetRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): RowID;
export function deleteRow(newRowID: number) {
  throw new Error('Function not implemented.');
}


