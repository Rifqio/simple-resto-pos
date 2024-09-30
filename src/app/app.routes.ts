import { Routes } from '@angular/router'
import { DashboardPage } from './pages'

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardPage }
]
