import { Component, Inject, OnInit } from '@angular/core'
import { OrderItem } from '@models/index'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
    heroMinusSolid,
    heroPencilSquareSolid,
    heroPlusSolid,
    heroTrashSolid
} from '@ng-icons/heroicons/solid'
import { OrderItemsService } from '@pages/dashboard/service'

@Component({
    selector: 'component-dashboard-order-items',
    standalone: true,
    templateUrl: './order-items.component.html',
    imports: [NgIconComponent],
    providers: [
        provideIcons({
            heroTrashSolid,
            heroPencilSquareSolid,
            heroMinusSolid,
            heroPlusSolid
        })
    ]
})
export class OrderItemsComponent implements OnInit {
    protected orderItems: Array<OrderItem> = []
    protected totalItems: number = 0

    constructor(
        @Inject(OrderItemsService) private orderItemsService: OrderItemsService
    ) {}

    ngOnInit(): void {
        this.orderItemsService.orderItems$.subscribe(items => {
            this.orderItems = items;
            this.totalItems = this.orderItemsService.totalOrderItems();
            console.log('Total items: ' + this.totalItems)
        })
    }
}
