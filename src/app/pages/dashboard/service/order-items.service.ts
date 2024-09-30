import { Injectable } from '@angular/core'
import { OrderItem } from '@models/index'
import { LoggerService } from 'app/shared/service/logger.service'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class OrderItemsService {
    private orderItemsSubject = new BehaviorSubject<Array<OrderItem>>([])
    public orderItems$ = this.orderItemsSubject.asObservable()

    constructor(private logger: LoggerService) {}

    public get orderItems(): Array<OrderItem> {
        return this.orderItemsSubject.getValue()
    }

    public addOrderItem(orderItem: OrderItem): void {
        this.logger.info('Adding order item ' + JSON.stringify(orderItem))
        if (this.orderItems.some(item => item.id === orderItem.id)) {
            const index = this.orderItems.findIndex(item => item.id === orderItem.id)
            const updatedOrderItems = this.orderItems.slice()
            updatedOrderItems[index].quantity += 1
            updatedOrderItems[index].totalPrice = updatedOrderItems[index].quantity * updatedOrderItems[index].price
            this.orderItemsSubject.next(updatedOrderItems)
            return
        } else {
            this.orderItemsSubject.next([...this.orderItems, orderItem])
        }
    }

    public removeOrderItem(index: number): void {
        const updatedOrderItems = this.orderItems.slice()
        updatedOrderItems.splice(index, 1)
        this.orderItemsSubject.next(updatedOrderItems);
    }

    public totalOrderItems(): number {
        return this.orderItems.length
    }
}
