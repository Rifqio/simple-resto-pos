import { OrderStatus, OrderType } from "@enum/index"

export class Order {
    id: string
    details: string
    date: Date
    time: number
    orderType: OrderType
    orderStatus: OrderStatus
    price: number

    // prettier-ignore
    constructor({ id, details, date, time, orderType, orderStatus, price } : { id: string, details: string, date: Date, time: number, orderType: OrderType, orderStatus: OrderStatus, price: number }) {
        this.id = id;
        this.details = details;
        this.date = date;
        this.time = time;
        this.orderType = orderType;
        this.orderStatus = orderStatus;
        this.price = price;
    }
}
