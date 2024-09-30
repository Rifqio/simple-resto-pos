export class OrderItem {
    id: string
    name: string
    quantity: number
    extra: Array<string>
    note: string
    price: number
    totalPrice: number
    image: string

    // prettier-ignore
    constructor({ id, name, quantity, extra, note, price, totalPrice, image }: { id: string, name: string; quantity: number; extra: Array<string>; note: string; price: number; totalPrice: number; image: string }) {
        this.id = id;
        this.name = name
        this.quantity = quantity
        this.extra = extra
        this.note = note
        this.price = price
        this.totalPrice = totalPrice
        this.image = image
    }
}
