import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlassSolid } from '@ng-icons/heroicons/solid';
import { TableDataComponent } from "./components/table-data/table-data.component";
import { TableFilter } from "./components/table-filter/table-filter.component";

@Component({
    selector: 'orders-page',
    standalone: true,
    imports: [CommonModule, NgIconComponent, TableFilter, TableDataComponent],
    providers: [provideIcons({ heroMagnifyingGlassSolid })],
    templateUrl: './orders.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class OrdersPage {}
