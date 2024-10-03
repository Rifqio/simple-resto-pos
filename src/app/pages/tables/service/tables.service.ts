import { Injectable } from '@angular/core'
import { TableStatus } from '@enum/index'
import { Table } from '@models/index'
import { BehaviorSubject } from 'rxjs'
import { TableSubject } from '../@type/table-subject.type'

@Injectable({
    providedIn: 'root'
})
export class TableService {
    private initTable: Table = new Table({
        number: 0,
        capacity: 0,
        status: TableStatus.Available
    })

    private tableSubject = new BehaviorSubject<TableSubject>({
        table: this.initTable,
        isTableSelected: false
    })

    public table$ = this.tableSubject.asObservable()

    public get selectedTable(): Table {
        return this.tableSubject.getValue().table
    }

    public get isTableSelected() : boolean {
        return this.tableSubject.getValue().isTableSelected
    }
    
    public setSelectedTable(table: Table): void {
        this.tableSubject.next({ table: table, isTableSelected: true })
    }

    private tables: Array<Table> = [
        {
            number: 1,
            capacity: 4,
            status: TableStatus.Occupied,
            occupiedAt: new Date()
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
    ]

    public getTables(): Array<Table> {
        return this.tables
    }
}
