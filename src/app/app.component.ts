import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '@components/index';
import { DashboardPage } from "./pages/dashboard/dashboard.page";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, SidebarComponent, DashboardPage],
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'pos-angular'
}
