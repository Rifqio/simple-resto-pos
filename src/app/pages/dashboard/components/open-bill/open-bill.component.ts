import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroBackspace, heroCircleStack } from '@ng-icons/heroicons/outline'

@Component({
    selector: 'component-dashboard-open-bill',
    standalone: true,
    imports: [NgIconComponent, FormsModule],
    providers: [provideIcons({ heroCircleStack, heroBackspace })],
    templateUrl: './open-bill.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpenBillComponent {
    @ViewChild('openBill')
    public openBillModal!: ElementRef

    @ViewChild('billAmount')
    public openBillAmountModal!: ElementRef

    protected keyboard: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    public amount: number = 0

    public onAddAmount(value: number): void {
        console.log(value)
    }

    public onShowOpenBill(): void {
        this.openBillModal.nativeElement.showModal()
    }

    public onCloseOpenBill(): void {
        this.openBillModal.nativeElement.close()
    }

    public onShowBillAmount(): void {
        this.openBillModal.nativeElement.close()
        this.openBillAmountModal.nativeElement.showModal()
    }

    public onCloseBillAmount(): void {
        this.openBillAmountModal.nativeElement.close()
    }
}
