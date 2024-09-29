import { NgClass } from '@angular/common'
import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroMagnifyingGlassSolid } from '@ng-icons/heroicons/solid'
import { AllMenuComponent } from './components/all-menu/all-menu.component'
import { CategoriesComponent } from './components/categories/categories.component'
import { MostPopularComponent } from './components/most-popular/most-popular.component'
import { OrderDetailsComponent } from './components/order-details/order-details.component'
import { OrderItemsComponent } from './components/order-items/order-items.component'
import { ReceiptComponent } from "./components/receipt/receipt.component"

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
    ReceiptComponent
],
    providers: [provideIcons({ heroMagnifyingGlassSolid })],
    templateUrl: './dashboard.page.html'
})

export class DashboardPage {
    protected orderType: string = 'dine-in'

    protected setOrderType(orderType: string): void {
        this.orderType = orderType
    }
}
