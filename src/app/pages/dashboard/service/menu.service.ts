import { Injectable } from '@angular/core'
import { AllMenuResponseDTO } from '@dto/all-menu.response.dto'

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    public menus: Array<AllMenuResponseDTO> = [
        {
            category: 'Main Course',
            menus: [
                {
                    id: 'MC-001',
                    category: 'Main Course',
                    description: 'A delicious main course',
                    name: 'Pizza Pepperoni',
                    isAvailable: true,
                    price: 100,
                    image: 'https://placehold.co/600x400'
                },
                {
                    id: 'MC-002',
                    category: 'Main Course',
                    description: 'A delicious main course',
                    name: 'Spaghetti Bolognese',
                    isAvailable: true,
                    price: 12.99,
                    image: 'https://placehold.co/600x400'
                },
                {
                    id: 'MC-003',
                    category: 'Main Course',
                    description: 'A delicious main course',
                    name: 'Roasted Chicken',
                    isAvailable: true,
                    price: 8.99,
                    image: 'https://placehold.co/600x400'
                },
                {
                    id: 'MC-004',
                    category: 'Main Course',
                    description: 'A delicious main course',
                    name: 'Cheeseburger',
                    isAvailable: true,
                    price: 8.99,
                    image: 'https://placehold.co/600x400'
                },
                {
                    id: 'MC-005',
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
                    id: 'SD-001',
                    category: 'Side Dish',
                    description: 'A delicious side dish',
                    name: 'Garlic Bread',
                    isAvailable: true,
                    price: 4.99,
                    image: 'https://placehold.co/600x400'
                },
                {
                    id: 'SD-002',
                    category: 'Side Dish',
                    description: 'A delicious side dish',
                    name: 'French Fries',
                    isAvailable: true,
                    price: 2.99,
                    image: 'https://placehold.co/600x400'
                },
                {
                    id: 'SD-003',
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
