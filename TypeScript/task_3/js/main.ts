/// <reference path="crud.d.ts" />

import * as CRUD from './crud.js';
import { RowID, RowElement } from './interface';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row)

const updatedRow: RowElement = row
updatedRow.age = 23;

CRUD.updateRow(newRowID, updatedRow)
CRUD.deleteRow(newRowID)