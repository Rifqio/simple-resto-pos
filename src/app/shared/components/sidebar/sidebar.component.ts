import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
    heroClipboardDocumentListSolid,
    heroCogSolid,
    heroHomeSolid,
    heroSquares2x2Solid,
    heroUserCircleSolid
} from '@ng-icons/heroicons/solid'

@Component({
    selector: 'component-sidebar',
    standalone: true,
    imports: [NgIconComponent, RouterLink, RouterLinkActive],
    providers: [
        provideIcons({
            heroHomeSolid,
            heroSquares2x2Solid,
            heroUserCircleSolid,
            heroCogSolid,
            heroClipboardDocumentListSolid
        })
    ],
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
    protected items = [
        { icon: 'heroHomeSolid', label: 'Home', link: '/dashboard' },
        {
            icon: 'heroSquares2x2Solid',
            label: 'Tables',
            link: '/tables'
        },
        { icon: 'heroClipboardDocumentListSolid', label: 'Orders', link: '/orders' },
        { icon: 'heroUserCircleSolid', label: 'Profile', link: '/profile' },
        { icon: 'heroCogSolid', label: 'Settings', link: '/settings' }
    ]
}
