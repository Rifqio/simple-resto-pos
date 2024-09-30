import { NgStyle } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { OrderItemsService } from '@pages/dashboard/service'
import { Subscription } from 'rxjs'

@Component({
    selector: 'component-dashboard-receipt',
    standalone: true,
    imports: [NgStyle],
    templateUrl: './receipt.component.html'
})

export class ReceiptComponent implements OnInit, OnDestroy {
    protected totalPrice: number = 0
    protected totalOrderItems: number = 0;
    protected orderItemSubscription?: Subscription

    constructor(private orderItemService: OrderItemsService) {}

    ngOnInit(): void {
        this.orderItemService.orderPrice$.subscribe(() => {
            this.totalPrice = this.orderItemService.orderPrice
            this.totalOrderItems = this.orderItemService.totalOrderItems();
        })
    }

    ngOnDestroy(): void {
        this.orderItemSubscription?.unsubscribe()
    }
}
