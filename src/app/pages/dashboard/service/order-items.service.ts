import { Injectable } from '@angular/core'
import { OrderItem } from '@models/index'
import { LoggerService } from 'app/shared/service/logger.service'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class OrderItemsService {
    private readonly logger = new LoggerService(this.constructor.name)
    private orderItemsSubject = new BehaviorSubject<Array<OrderItem>>([])
    private orderPriceSubject = new BehaviorSubject<number>(0)

    public orderItems$ = this.orderItemsSubject.asObservable()
    public orderPrice$ = this.orderPriceSubject.asObservable()

    public get orderItems(): Array<OrderItem> {
        return this.orderItemsSubject.getValue()
    }

    public get orderPrice(): number {
        return this.orderPriceSubject.getValue()
    }

    public addOrderItem(orderItem: OrderItem): void {
        const existingItemIndex = this.getItemIndex(orderItem.id)
    
        if (existingItemIndex !== -1) {
            this.updateItemQuantity(
                existingItemIndex,
                this.orderItems[existingItemIndex].quantity + 1
            )
        } else {
            this.orderItemsSubject.next([...this.orderItems, orderItem])
        }
        this.updateOrderPrice()
        this.logger.info('Order item added', JSON.stringify(orderItem))
    }

    public updateOrderPrice(): void {
        // prettier-ignore
        const orderPrice = this.orderItems.reduce((acc, item) => acc + item.totalPrice, 0)
        this.orderPriceSubject.next(orderPrice)
    }

    public addQuantity(id: string): void {
        const index = this.getItemIndex(id)
        if (index !== -1) {
            this.updateItemQuantity(index, this.orderItems[index].quantity + 1)
        }
        this.updateOrderPrice()
    }

    public subtractQuantity(id: string): void {
        const index = this.getItemIndex(id)
        if (index !== -1) {
            const currentQuantity = this.orderItems[index].quantity
            if (currentQuantity === 1) {
                this.removeOrderItem(index)
                this.updateOrderPrice()
                return
            }
            this.updateItemQuantity(index, currentQuantity - 1)
        }
        this.updateOrderPrice()
    }

    public removeOrderItem(index: number): void {
        const updatedOrderItems = this.orderItems.slice()
        updatedOrderItems.splice(index, 1)
        this.orderItemsSubject.next(updatedOrderItems)
        this.updateOrderPrice()
    }

    public totalOrderItems(): number {
        return this.orderItems.length
    }

    public clearOrderItems(): void {
        this.orderItemsSubject.next([])
        this.orderPriceSubject.next(0)
    }

    private getItemIndex(id: string): number {
        return this.orderItems.findIndex(item => item.id === id)
    }

    private updateItemQuantity(index: number, newQuantity: number): void {
        const updatedOrderItems = [...this.orderItems]
        const item = updatedOrderItems[index]

        item.quantity = newQuantity
        item.totalPrice = item.quantity * item.price

        this.updateOrderItems(updatedOrderItems)
    }

    private updateOrderItems(orderItems: Array<OrderItem>): void {
        this.orderItemsSubject.next(orderItems)
    }
}
