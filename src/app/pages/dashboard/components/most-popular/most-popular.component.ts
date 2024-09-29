import { Component } from '@angular/core'
import { Menu } from '@models/index'

@Component({
    selector: 'component-dashboard-most-popular',
    standalone: true,
    templateUrl: './most-popular.component.html'
})
export class MostPopularComponent {
    protected mostPopularMenu: Array<Menu> = [
        {
            name: 'Spaghetti Bolognese',
            price: 12.99,
            description: 'Spaghetti with tomato sauce and minced meat',
            category: 'Main Course',
            image: 'https://placehold.co/600x400',
            isAvailable: true
        },
        {
            name: 'Caesar Salad',
            price: 8.99,
            description: 'Romaine lettuce, croutons, parmesan cheese, and Caesar dressing',
            category: 'Main Course',
            image: 'https://placehold.co/600x400',
            isAvailable: true
        },
        {
            name: 'Garlic Bread',
            price: 4.99,
            description: 'Bread topped with garlic and olive oil or butter',
            category: 'Side Dish',
            image: 'https://placehold.co/600x400',
            isAvailable: true
        },
        {
            name: 'Tiramisu',
            price: 6.99,
            description: 'Coffee-flavored Italian dessert',
            category: 'Dessert',
            image: 'https://placehold.co/600x400',
            isAvailable: true
        }
    ]
}
