import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from '@models/index';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlassSolid } from '@ng-icons/heroicons/solid';
import { OrdersService } from '@pages/orders/orders.service';
import { LoggerService } from 'app/shared/service/logger.service';
import { Subscription } from 'rxjs';
import { SeatListComponent } from "./components/seat-list/seat-list.component";

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
    protected tableStatusList = ['Available', 'Reserved', 'Occupied']
    protected order?: Order;
    private readonly logger = new LoggerService(TablesPage.name);

    constructor(private orderService: OrdersService) {}
    
    ngOnInit(): void {
        this.orderSubscription = this.orderService.order$.subscribe(order => {
            this.order = order;
            this.logger.info('Order: '+ JSON.stringify(order));
            this.logger.info(`${this.order?.id}`);
        })    
    }

    ngOnDestroy(): void {
        this.orderSubscription?.unsubscribe();
    }
}