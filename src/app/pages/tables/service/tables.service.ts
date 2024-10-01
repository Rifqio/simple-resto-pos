import { Injectable } from '@angular/core';
import { TableStatus } from '@enum/index';
import { Table } from '@models/index';

@Injectable({
    providedIn: 'root'
})

export class TableService {
    private tables: Array<Table> = [
        {
            number: 1,
            capacity: 4,
            status: TableStatus.Occupied,
            occupiedAt: new Date(),
        },
        {
            number: 2,
            capacity: 4,
            status: TableStatus.Available
        },
        {
            number: 3,
            capacity: 6,
            status: TableStatus.Reserved,
            reservedBy: 'John Doe',
            reservedAt: new Date(),
            reservedUntil: new Date()
        },
        {
            number: 4,
            capacity: 4,
            status: TableStatus.Available
        },
        {
            number: 5,
            capacity: 8,
            status: TableStatus.Available
        },
        {
            number: 6,
            capacity: 4,
            status: TableStatus.Available
        },
        {
            number: 7,
            capacity: 4,
            status: TableStatus.Available
        },
        {
            number: 8,
            capacity: 4,
            status: TableStatus.Available
        },
        {
            number: 9,
            capacity: 4,
            status: TableStatus.Available
        },
        {
            number: 10,
            capacity: 4,
            status: TableStatus.Available
        }
    ];

    public getTables(): Array<Table> {
        return this.tables;
    }
}
