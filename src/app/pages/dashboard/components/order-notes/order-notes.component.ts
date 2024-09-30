import { Component, ElementRef, ViewChild } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { LoggerService } from 'app/shared/service/logger.service'

@Component({
    selector: 'component-dashboard-order-notes',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './order-notes.component.html'
})

export class OrderNotesComponent {
    constructor(private logger: LoggerService){}
    @ViewChild('orderNotes')
    public orderNotesModal!: ElementRef

    protected orderNote: string = ''

    public onShowModal(): void {
        this.orderNotesModal.nativeElement.showModal()
    }

    public onCloseModal(): void {
        this.orderNotesModal.nativeElement.close()
    }

    public onAddNote(): void {
        this.logger.info('Adding order note: ' + this.orderNote)
        this.onCloseModal()
    }
}
