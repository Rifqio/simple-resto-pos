import { Component, OnDestroy, OnInit } from '@angular/core'
import { AllMenuResponseDTO } from '@dto/all-menu.response.dto'
import { Menu, OrderItem } from '@models/index'
import { MenuService, OrderItemsService } from '@pages/dashboard/service'
import { OpenBillService } from '@pages/dashboard/service/open-bill.service'
import { LoggerService } from 'app/shared/service/logger.service'
import { Subscription } from 'rxjs'

@Component({
    selector: 'component-dashboard-all-menu',
    standalone: true,
    providers: [MenuService],
    templateUrl: './all-menu.component.html'
})
export class AllMenuComponent implements OnInit, OnDestroy {
    protected menus: Array<AllMenuResponseDTO> = []
    protected openBillSubscription!: Subscription

    private readonly logger = new LoggerService(this.constructor.name)

    protected priceLimit: number = 0
    protected isPriceLimitReached: boolean = false
    protected showLimitWarning: boolean = false

    constructor(
        private menuService: MenuService,
        private orderItemService: OrderItemsService,
        private openBillService: OpenBillService
    ) {}

    ngOnInit(): void {
        this.menus = this.menuService.menus
        this.openBillSubscription = this.openBillService.openBill$.subscribe(
            data => {
                this.priceLimit = data.orderPriceLimit
                this.isPriceLimitReached = data.isOrderPriceLimit
            }
        )
    }

    ngOnDestroy(): void {
        this.openBillSubscription.unsubscribe()
    }

    protected addToOrder(data: Menu): void {
        const orderItem = new OrderItem({
            id: data.id,
            name: data.name,
            image: data.image ?? '',
            extra: [],
            quantity: 1,
            price: data.price,
            totalPrice: data.price,
            note: ''
        })

        const orderPrice = orderItem.price

        if (orderPrice > this.priceLimit && this.priceLimit !== 0) {
            this.openBillService.setOrderPriceIsLimit(true)
            return
        }

        this.orderItemService.addOrderItem(orderItem)
    }
}
