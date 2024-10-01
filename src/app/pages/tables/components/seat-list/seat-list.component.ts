import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TableStatus } from '@enum/index';
import { Table } from '@models/index';
import { TableService } from '@pages/tables/service/tables.service';

@Component({
    selector: 'component-tables-seat-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './seat-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SeatListComponent implements OnInit {
    constructor(private tableService: TableService) {}

    protected tables: Array<Table> = [];
    protected tableStatus = TableStatus

    ngOnInit(): void {
        this.tables = this.tableService.getTables();
    }
}
