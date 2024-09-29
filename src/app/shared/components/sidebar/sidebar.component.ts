import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
    heroChevronDoubleRightSolid,
    heroCogSolid,
    heroDocumentSolid,
    heroHomeSolid,
    heroSquares2x2Solid,
    heroUserCircleSolid
} from '@ng-icons/heroicons/solid'

@Component({
    selector: 'component-sidebar',
    standalone: true,
    imports: [NgIconComponent],
    providers: [
        provideIcons({
            heroHomeSolid,
            heroChevronDoubleRightSolid,
            heroSquares2x2Solid,
            heroUserCircleSolid,
            heroDocumentSolid,
            heroCogSolid
        })
    ],
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
    protected items = [
        { icon: 'heroHomeSolid', label: 'Home', link: '/' },
        {
            icon: 'heroSquares2x2Solid',
            label: 'Categories',
            link: '/categories'
        },
        { icon: 'heroUserCircleSolid', label: 'Orders', link: '/orders' },
        { icon: 'heroDocumentSolid', label: 'Profile', link: '/profile' },
        { icon: 'heroCogSolid', label: 'Settings', link: '/settings' }
    ]
}
