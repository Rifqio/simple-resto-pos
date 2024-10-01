import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { OrderStatus } from '@enum/index';

@Component({
    selector: 'table-order-status',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-status.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderStatusComponent {
    protected orderStatus = OrderStatus
    public status = input.required<OrderStatus>();
}
