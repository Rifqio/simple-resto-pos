import { CommonModule } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { OrderItemsService } from '@pages/dashboard/service'
import { Subscription } from 'rxjs'

@Component({
    selector: 'component-dashboard-receipt',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './receipt.component.html'
})

export class ReceiptComponent implements OnInit, OnDestroy {
    protected totalPrice: number = 0
    protected ppnTax: number = 0.10;
    protected priceAfterTax: number = 0;
    protected totalOrderItems: number = 0;
    protected orderItemSubscription?: Subscription

    constructor(private orderItemService: OrderItemsService, private router: Router) {}

    ngOnInit(): void {
        this.orderItemSubscription = this.orderItemService.orderPrice$.subscribe(() => {
            this.totalPrice = this.orderItemService.orderPrice
            this.totalOrderItems = this.orderItemService.totalOrderItems();
        })
    }

    ngOnDestroy(): void {
        this.orderItemSubscription?.unsubscribe()
    }

    public getTotalTax() : number {
        return this.totalPrice * this.ppnTax; 
    }

    public getPriceAfterTax(): number {
        return this.getTotalTax() + this.totalPrice;
    }
    
    protected continueOrder(): void {
        this.router.navigate(['/tables'])
    }
}
