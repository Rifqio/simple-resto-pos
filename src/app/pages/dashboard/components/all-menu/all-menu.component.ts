import { Component } from '@angular/core'
import { AllMenuResponseDTO } from '@dto/all-menu.response.dto'

@Component({
    selector: 'component-dashboard-all-menu',
    standalone: true,
    templateUrl: './all-menu.component.html'
})
export class AllMenuComponent {
    menus: Array<AllMenuResponseDTO> = [
        {
            category: 'Main Course',
            menus: [
                {
                    category: 'Main Course',
                    description: 'A delicious main course',
                    name: 'Pizza Pepperoni',
                    isAvailable: true,
                    price: 100,
                    image: 'https://placehold.co/600x400'
                },
                {
                    category: 'Main Course',
                    description: 'A delicious main course',
                    name: 'Spaghetti Bolognese',
                    isAvailable: true,
                    price: 12.99,
                    image: 'https://placehold.co/600x400'
                },
                {
                    category: 'Main Course',
                    description: 'A delicious main course',
                    name: 'Roasted Chicken',
                    isAvailable: true,
                    price: 8.99,
                    image: 'https://placehold.co/600x400'
                },
                {
                    category: 'Main Course',
                    description: 'A delicious main course',
                    name: 'Cheeseburger',
                    isAvailable: true,
                    price: 8.99,
                    image: 'https://placehold.co/600x400'
                },
                {
                    category: 'Main Course',
                    description: 'A delicious main course',
                    name: 'Hotdog',
                    isAvailable: true,
                    price: 5.99,
                    image: 'https://placehold.co/600x400'
                }
            ]
        },
        {
            category: 'Side Dish',
            menus: [
                {
                    category: 'Side Dish',
                    description: 'A delicious side dish',
                    name: 'Garlic Bread',
                    isAvailable: true,
                    price: 4.99,
                    image: 'https://placehold.co/600x400'
                },
                {
                    category: 'Side Dish',
                    description: 'A delicious side dish',
                    name: 'French Fries',
                    isAvailable: true,
                    price: 2.99,
                    image: 'https://placehold.co/600x400'
                },
                {
                    category: 'Side Dish',
                    description: 'A delicious side dish',
                    name: 'Onion Rings',
                    isAvailable: true,
                    price: 3.99,
                    image: 'https://placehold.co/600x400'
                }
            ]
        }
    ]
}
