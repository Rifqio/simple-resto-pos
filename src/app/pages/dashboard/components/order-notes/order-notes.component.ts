import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'component-dashboard-order-notes',
    standalone: true,
    templateUrl: './order-notes.component.html'
})

export class OrderNotesComponent {
    @ViewChild('orderNotes')
    public orderNotesModal!: ElementRef;

    public onShowModal(): void {
        this.orderNotesModal.nativeElement.showModal();
    }

    public onCloseModal(): void {
        this.orderNotesModal.nativeElement.close();
    }
}
