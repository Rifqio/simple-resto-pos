import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'component-tables-seat-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './seat-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeatListComponent {}
