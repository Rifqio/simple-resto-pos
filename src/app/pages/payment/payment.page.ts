import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroInformationCircle } from '@ng-icons/heroicons/outline'

@Component({
    selector: 'page-payment',
    standalone: true,
    imports: [CommonModule, NgIconComponent],
    providers: [provideIcons({ heroInformationCircle })],
    templateUrl: './payment.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentPage {
    protected paymentData = [
        {
            label: 'Subtotal',
            value: 299
        },
        {
            label: 'Tax 10%',
            value: 29.9
        }
    ]
}
