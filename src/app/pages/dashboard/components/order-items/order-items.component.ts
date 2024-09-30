import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { OrderItem } from '@models/index'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
    heroMinusSolid,
    heroPencilSquareSolid,
    heroPlusSolid,
    heroTrashSolid
} from '@ng-icons/heroicons/solid'
import { OrderItemsService } from '@pages/dashboard/service'
import { Subscription } from 'rxjs'

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
export class OrderItemsComponent implements OnInit, OnDestroy {
    protected orderItems: Array<OrderItem> = []
    protected totalItems: number = 0
    protected orderItemsSubscription?: Subscription

    constructor(
        @Inject(OrderItemsService) private orderItemsService: OrderItemsService
    ) {}

    ngOnInit(): void {
        this.orderItemsSubscription = this.orderItemsService.orderItems$.subscribe(items => {
            this.orderItems = items
            this.totalItems = this.orderItemsService.totalOrderItems()
        })
    }

    ngOnDestroy(): void {
        this.orderItemsSubscription?.unsubscribe();
    }

    protected addQuantity(id: string): void {
        this.orderItemsService.addQuantity(id)
    }

    protected subtractQuantity(id: string): void {
        this.orderItemsService.subtractQuantity(id)
    }
}
