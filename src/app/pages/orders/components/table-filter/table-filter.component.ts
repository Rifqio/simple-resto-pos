import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'component-orders-table-filter',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './table-filter.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TableFilter {}
