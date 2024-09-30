import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'component-dashboard-order-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class OrderDetailsComponent {
    protected currentDate: Date = new Date();
    protected orderId: string = '';

    protected generateOrderId(): string {
        const prefix = 'ORD-';
        const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase(); // 6 random alphanumeric characters
        return `${prefix}${randomPart}`;
    }
}
