import { CommonModule } from '@angular/common'
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
    imports: [NgIconComponent, RouterLink, RouterLinkActive, CommonModule],
    providers: [
        provideIcons({
            heroHomeSolid,
            heroSquares2x2Solid,
            heroUserCircleSolid,
            heroCogSolid,
            heroClipboardDocumentListSolid
        })
    ],
    templateUrl: './sidebar.component.html',
    styles: [`
        :host ::ng-deep .active {
            background-color: #3b82f6 !important; 
            color: white !important;
        }
        :host ::ng-deep .active ng-icon {
            color: white !important;
        }
    `]
})

export class SidebarComponent {
    protected items = [
        { icon: 'heroHomeSolid', label: 'Home', link: '/dashboard' },
        { icon: 'heroSquares2x2Solid', label: 'Tables', link: '/tables' },
        { icon: 'heroClipboardDocumentListSolid', label: 'Orders', link: '/orders' },
        { icon: 'heroUserCircleSolid', label: 'Profile', link: '/profile' },
        { icon: 'heroCogSolid', label: 'Settings', link: '/settings' }
    ]
}