import { Routes } from '@angular/router'
import { DashboardPage, OrdersPage, PaymentPage, TablesPage } from './pages'

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardPage },
    { path: 'orders', component: OrdersPage },
    { path: 'tables', component: TablesPage },
    { path: 'payment', component: PaymentPage }
]
