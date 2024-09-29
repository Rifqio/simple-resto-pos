import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroMinusSolid, heroPencilSquareSolid, heroPlusSolid, heroTrashSolid } from '@ng-icons/heroicons/solid'

@Component({
    selector: 'component-dashboard-order-items',
    standalone: true,
    templateUrl: './order-items.component.html',
    imports: [NgIconComponent],
    providers: [provideIcons({ heroTrashSolid, heroPencilSquareSolid, heroMinusSolid, heroPlusSolid })]
})
export class OrderItemsComponent {
    protected orderItems = [
        {
            name: 'Beef Burger',
            quantity: 2,
            extra: ['Mustard'],
            note: 'No Cheese',
            price: 20,
            totalPrice: 40,
            image: 'https://placehold.co/600x400'
        },
        {
          name: 'Chicken Burger',
          quantity: 1,
          extra: ['Ketchup'],
          note: 'Extra Cheese',
          price: 15,
          totalPrice: 15,
          image: 'https://placehold.co/600x400'
        },
        // {
        //   name: 'Chicken Burger',
        //   quantity: 1,
        //   extra: ['Ketchup'],
        //   note: 'Extra Cheese',
        //   price: 15,
        //   totalPrice: 15,
        //   image: 'https://placehold.co/600x400'
        // },
    ]
}
