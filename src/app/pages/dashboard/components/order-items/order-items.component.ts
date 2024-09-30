import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core'
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
import { OrderNotesComponent } from "../order-notes/order-notes.component"

@Component({
    selector: 'component-dashboard-order-items',
    standalone: true,
    templateUrl: './order-items.component.html',
    imports: [NgIconComponent, OrderNotesComponent],
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

    @ViewChild(OrderNotesComponent)
    protected orderNotesModal?: OrderNotesComponent;

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

    public onShowOrderNotes() {
        this.orderNotesModal?.onShowModal();
    }

    protected addQuantity(id: string): void {
        this.orderItemsService.addQuantity(id)
    }

    protected removeOrderItem(index: number): void {
        this.orderItemsService.removeOrderItem(index)
    }

    protected subtractQuantity(id: string): void {
        this.orderItemsService.subtractQuantity(id)
    }
}
