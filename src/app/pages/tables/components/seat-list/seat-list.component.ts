import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TableStatus } from '@enum/index';
import { Table } from '@models/index';
import { TableService } from '@pages/tables/service/tables.service';
import { LoggerService } from 'app/shared/service/logger.service';

@Component({
    selector: 'component-tables-seat-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './seat-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SeatListComponent implements OnInit {
    constructor(private tableService: TableService) {}
    private readonly logger = new LoggerService(this.constructor.name);

    protected tables: Array<Table> = [];
    protected selectedTable?: Table;
    protected tableStatus = TableStatus;

    ngOnInit(): void {
        this.tables = this.tableService.getTables();
    }

    public onChooseTable(table: Table): void {
        this.tableService.setSelectedTable(table);
        this.logger.info('Table chosen', JSON.stringify(table));
    }
}
