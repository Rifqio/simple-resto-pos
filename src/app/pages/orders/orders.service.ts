import { Injectable } from '@angular/core'
import { OrderStatus, OrderType } from '@enum/index'
import { Order } from '@models/index'
import { LoggerService } from 'app/shared/service/logger.service'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class OrdersService {
    private orderSubject = new BehaviorSubject<Order>(
        new Order({
            id: '',
            date: new Date(),
            details: '',
            orderStatus: OrderStatus.Complete,
            orderType: OrderType.DineIn,
            price: 0,
            time: 0
        })
    )

    private readonly logger = new LoggerService(OrdersService.name)

    public order$ = this.orderSubject.asObservable();

    public get order() : Order {
        return this.orderSubject.getValue();
    }

    public selectedOrder (data: Order) {
        this.logger.info('Selected order: ' + JSON.stringify(data));
        this.orderSubject.next(data);
    }

    public createOrder (data: Order) {
        this.logger.info('Created order: ' + JSON.stringify(data));
        window.localStorage.setItem('order', JSON.stringify(data));
        this.orderSubject.next(data);
    }
}
