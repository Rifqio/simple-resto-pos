import { Routes } from '@angular/router'
import { DashboardPage, OrdersPage } from './pages'

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardPage },
    { path: 'orders', component: OrdersPage }
]
