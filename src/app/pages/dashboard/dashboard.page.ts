import { NgClass } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroMagnifyingGlassSolid } from '@ng-icons/heroicons/solid'
import { Subscription } from 'rxjs'
import { AllMenuComponent } from './components/all-menu/all-menu.component'
import { CategoriesComponent } from './components/categories/categories.component'
import { MostPopularComponent } from './components/most-popular/most-popular.component'
import { OpenBillComponent } from "./components/open-bill/open-bill.component"
import { OrderDetailsComponent } from './components/order-details/order-details.component'
import { OrderItemsComponent } from './components/order-items/order-items.component'
import { ReceiptComponent } from './components/receipt/receipt.component'
import { OrderItemsService } from './service'

@Component({
    selector: 'page-dashboard',
    standalone: true,
    imports: [
    NgIconComponent,
    CategoriesComponent,
    MostPopularComponent,
    AllMenuComponent,
    OrderDetailsComponent,
    OrderItemsComponent,
    NgClass,
    ReceiptComponent,
    OpenBillComponent
],
    providers: [provideIcons({ heroMagnifyingGlassSolid })],
    templateUrl: './dashboard.page.html'
})
export class DashboardPage implements OnInit, OnDestroy {
    protected orderType: string = 'dine-in'
    protected orderItemSubscription?: Subscription;
    protected totalOrderItems: number = 0

    constructor(private orderItemService: OrderItemsService) {}
    
    ngOnInit(): void {
        this.orderItemSubscription = this.orderItemService.orderItems$.subscribe(() => {
            this.totalOrderItems = this.orderItemService.totalOrderItems()
        });
    }

    ngOnDestroy(): void {
        this.orderItemSubscription?.unsubscribe();
    }
    
    protected setOrderType(orderType: string): void {
        this.orderType = orderType
    }
}
