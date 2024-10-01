import { CommonModule } from '@angular/common'
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    ViewChild
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroBackspace, heroCircleStack } from '@ng-icons/heroicons/outline'
import { OpenBillService } from '@pages/dashboard/service/open-bill.service'

@Component({
    selector: 'component-dashboard-open-bill',
    standalone: true,
    imports: [CommonModule, NgIconComponent, FormsModule],
    providers: [provideIcons({ heroCircleStack, heroBackspace })],
    templateUrl: './open-bill.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpenBillComponent {
    @ViewChild('openBill')
    public openBillModal!: ElementRef

    @ViewChild('billAmount')
    public openBillAmountModal!: ElementRef

    // prettier-ignore
    protected keyboard: Array<number | string> = [1, 2, 3, 4, 5, 6, 7, 8, 9, ',', 0]
    public amount: number = 0

    constructor(private openBillService: OpenBillService) {}

    public onAddAmount(value: number | string): void {
        if (value === ',') {
            this.amount = parseFloat(this.amount.toString() + '.')
        } else {
            this.amount = parseFloat(this.amount.toString() + value.toString())
        }
        this.amount = parseFloat(this.amount.toFixed(2))
    }
    
    public onConfirmAmount(): void {
        this.openBillService.setOrderPriceLimit(this.amount)
        this.openBillAmountModal.nativeElement.close();
    }

    public onShowOpenBill(): void {
        this.openBillModal.nativeElement.showModal()
    }

    public onCloseOpenBill(): void {
        this.openBillModal.nativeElement.close()
    }

    public onShowBillAmount(): void {
        this.openBillModal.nativeElement.close()
        this.openBillService.setOpenBillStatus(true);
        this.openBillAmountModal.nativeElement.showModal()
    }

    public onCloseBillAmount(): void {
        this.openBillAmountModal.nativeElement.close()
        this.amount = 0
    }
}
