import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderItem } from '@models/index';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlassSolid } from '@ng-icons/heroicons/solid';
import { OrderItemsService } from '@pages/dashboard/service';
import { LoggerService } from 'app/shared/service/logger.service';
import { Subscription } from 'rxjs';
import { SeatListComponent } from "./components/seat-list/seat-list.component";
import { TableService } from './service/tables.service';

@Component({
    selector: 'page-tables',
    standalone: true,
    imports: [CommonModule, NgIconComponent, SeatListComponent],
    templateUrl: './tables.page.html',
    providers: [provideIcons({ heroMagnifyingGlassSolid })],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TablesPage implements OnInit, OnDestroy {
    protected orderSubscription?: Subscription;
    protected tableSubscription?: Subscription;
    protected tableStatusList = ['Available', 'Reserved', 'Occupied']
    protected orderItem?: Array<OrderItem> = [];
    protected isTableSelected: boolean = false;
    private readonly logger = new LoggerService(TablesPage.name);

    constructor(
        private orderItemService: OrderItemsService, 
        private tableService: TableService, 
        private router: Router
    ) {}
    
    ngOnInit(): void {
        this.orderSubscription = this.orderItemService.orderItems$.subscribe((data) => {
            this.orderItem = data;
            this.logger.info('Order items updated', JSON.stringify(data));
        });

        this.tableSubscription = this.tableService.table$.subscribe((data) => {
            this.isTableSelected = data.isTableSelected;
        })
    }

    ngOnDestroy(): void {
        this.orderSubscription?.unsubscribe();
        this.tableSubscription?.unsubscribe();
    }

    protected onConfirmTable(): void {
        this.router.navigate(['/payment']);
    }
}