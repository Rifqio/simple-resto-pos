import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlassSolid } from '@ng-icons/heroicons/solid';
import { SeatListComponent } from "./components/seat-list/seat-list.component";

@Component({
    selector: 'page-tables',
    standalone: true,
    imports: [CommonModule, NgIconComponent, SeatListComponent],
    templateUrl: './tables.page.html',
    providers: [provideIcons({ heroMagnifyingGlassSolid })],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TablesPage {
    protected tableStatusList = ['Available', 'Reserved', 'Occupied']
}
