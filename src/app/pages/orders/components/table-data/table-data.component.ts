import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OrderStatus, OrderType } from '@enum/index';
import { Order } from '@models/index';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroPencil, heroTrash } from '@ng-icons/heroicons/outline';
import { OrderStatusComponent } from "./order-status/order-status.component";

@Component({
    selector: 'component-orders-table-data',
    standalone: true,
    imports: [CommonModule, NgIconComponent, OrderStatusComponent],
    providers: [provideIcons({ heroPencil, heroTrash })],
    templateUrl: './table-data.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableDataComponent {
    protected orderType = OrderType;
    protected orderStatus = OrderStatus;
    protected totalPage: number = 5;

    protected tableHeaders: Array<string> = [
        'Order ID',
        'Order Details',
        'Date',
        'Time',
        'Order Type',
        'Order Status',
        'Price'
    ]

    protected orders: Array<Order> = [
        new Order({
            id: 'ORD-112',
            date: new Date(),
            details: 'X 2 Chicken BBQ',
            orderStatus: OrderStatus.Complete,
            orderType: OrderType.Takeaway,
            price: 10.44,
            time: Date.now(),
        }),
        new Order({
            id: 'ORD-112',
            date: new Date(),
            details: 'X 2 Chicken BBQ',
            orderStatus: OrderStatus.OnHold,
            orderType: OrderType.Takeaway,
            price: 10.44,
            time: Date.now(),
        }),
        new Order({
            id: 'ORD-112',
            date: new Date(),
            details: 'X 2 Chicken BBQ',
            orderStatus: OrderStatus.OnHold,
            orderType: OrderType.Takeaway,
            price: 10.44,
            time: Date.now(),
        }),
        new Order({
            id: 'ORD-112',
            date: new Date(),
            details: 'X 2 Chicken BBQ',
            orderStatus: OrderStatus.OnHold,
            orderType: OrderType.Takeaway,
            price: 10.44,
            time: Date.now(),
        }),
        new Order({
            id: 'ORD-112',
            date: new Date(),
            details: 'X 2 Chicken BBQ',
            orderStatus: OrderStatus.OnHold,
            orderType: OrderType.Takeaway,
            price: 10.44,
            time: Date.now(),
        }),
        new Order({
            id: 'ORD-112',
            date: new Date(),
            details: 'X 2 Chicken BBQ',
            orderStatus: OrderStatus.OnHold,
            orderType: OrderType.Takeaway,
            price: 10.44,
            time: Date.now(),
        }),
        new Order({
            id: 'ORD-112',
            date: new Date(),
            details: 'X 2 Chicken BBQ',
            orderStatus: OrderStatus.OnHold,
            orderType: OrderType.Takeaway,
            price: 10.44,
            time: Date.now(),
        }),
        new Order({
            id: 'ORD-112',
            date: new Date(),
            details: 'X 2 Chicken BBQ',
            orderStatus: OrderStatus.OnHold,
            orderType: OrderType.Takeaway,
            price: 10.44,
            time: Date.now(),
        }),
        new Order({
            id: 'ORD-112',
            date: new Date(),
            details: 'X 2 Chicken BBQ',
            orderStatus: OrderStatus.OnHold,
            orderType: OrderType.Takeaway,
            price: 10.44,
            time: Date.now(),
        }),
        new Order({
            id: 'ORD-112',
            date: new Date(),
            details: 'X 2 Chicken BBQ',
            orderStatus: OrderStatus.OnHold,
            orderType: OrderType.Takeaway,
            price: 10.44,
            time: Date.now(),
        }),
    ]
}
