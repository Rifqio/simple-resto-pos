import { Component, Inject, OnInit } from '@angular/core'
import { AllMenuResponseDTO } from '@dto/all-menu.response.dto'
import { Menu, OrderItem } from '@models/index'
import { MenuService, OrderItemsService } from '@pages/dashboard/service'

@Component({
    selector: 'component-dashboard-all-menu',
    standalone: true,
    providers: [MenuService],
    templateUrl: './all-menu.component.html'
})
export class AllMenuComponent implements OnInit {
    protected menus: Array<AllMenuResponseDTO> = []
    constructor(
        private menuService: MenuService,
        @Inject(OrderItemsService) private orderItemService: OrderItemsService
    ) {}

    ngOnInit(): void {
        this.menus = this.menuService.menus
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
        this.orderItemService.addOrderItem(orderItem)
    }
}
