import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { OrderItem } from '@models/index'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
    heroMinusSolid,
    heroPencilSquareSolid,
    heroPlusSolid,
    heroTrashSolid
} from '@ng-icons/heroicons/solid'

@Component({
    selector: 'shared-order-items',
    standalone: true,
    imports: [CommonModule, NgIconComponent],
    providers: [
        provideIcons({
            heroPencilSquareSolid,
            heroTrashSolid,
            heroPlusSolid,
            heroMinusSolid
        })
    ],
    templateUrl: './order-items.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderItemsComponent {
    public orderItem = input.required<OrderItem>()
}
