import { Component } from '@angular/core';

@Component({
    selector: 'component-dashboard-categories',
    standalone: true,
    templateUrl: './categories.component.html'
})
export class CategoriesComponent {
    protected categories: Array<{ label: string; icon?: string }> = [
        {
            label: 'All'
        },
        {
            label: 'Main Course'
        },
        {
            label: 'Side Dish'
        },
        {
            label: 'Dessert'
        }
    ]
}
