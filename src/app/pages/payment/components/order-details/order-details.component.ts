import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { OrderItemsComponent } from '@components/index'
import { OrderItem } from '@models/order-items.model'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroEllipsisVerticalSolid } from '@ng-icons/heroicons/solid'

@Component({
    selector: 'payment-order-details',
    standalone: true,
    imports: [CommonModule, NgIconComponent, OrderItemsComponent],
    providers: [provideIcons({ heroEllipsisVerticalSolid })],
    templateUrl: './order-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderDetailsComponent {
    protected orderItems: Array<OrderItem> = [
        {
            id: '1',
            name: 'Item 1',
            price: 100,
            quantity: 1,
            image: 'https://via.placeholder.com/150',
            totalPrice: 100
        }
    ]

    protected orderActions: Array<{ label: string; action?: () => void }> = [
        {
            label: 'Hold Order'
        },
        {
            label: 'Split Order'
        },
        {
            label: 'Cancel Order'
        }
    ]
}
