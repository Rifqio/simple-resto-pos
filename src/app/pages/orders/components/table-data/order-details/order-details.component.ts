import { CommonModule } from '@angular/common'
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core'
import { Order } from '@models/index'
import { OrdersService } from '@pages/orders/orders.service'
import { LoggerService } from 'app/shared/service/logger.service'
import { Subscription } from 'rxjs'

@Component({
    selector: 'table-order-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './order-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
    @ViewChild('orderDetails')
    public orderDetailsModal!: ElementRef
    protected order?: Order
    protected orderNote: string = ''
    protected orderSubscripion: Subscription = new Subscription()
    private readonly logger = new LoggerService(OrderDetailsComponent.name)

    constructor(
        private orderService: OrdersService,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.orderSubscripion = this.orderService.order$.subscribe(
            (data: Order) => {
                this.order = data
                this.cdr.markForCheck()
            }
        )
    }

    ngOnDestroy(): void {
        this.orderSubscripion.unsubscribe()
        this.orderService.clearOrder()
    }

    public onShowModal(): void {
        this.orderDetailsModal.nativeElement.showModal()
    }

    public onCloseModal(): void {
        this.orderDetailsModal.nativeElement.close()
    }
}
