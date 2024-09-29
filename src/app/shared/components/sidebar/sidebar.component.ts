import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroChevronDoubleRightSolid, heroHomeSolid } from '@ng-icons/heroicons/solid'

@Component({
    selector: 'component-sidebar',
    standalone: true,
    imports: [NgIconComponent],
    providers: [provideIcons({ heroHomeSolid, heroChevronDoubleRightSolid })],
    templateUrl: './sidebar.component.html'
})

export class SidebarComponent {
    protected items = [{ icon: 'heroHomeSolid', label: 'Home', link: '/' }]
}
