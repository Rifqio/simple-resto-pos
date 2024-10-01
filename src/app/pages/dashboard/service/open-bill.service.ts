import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OpenBill } from '../@type/open-bill.type';

@Injectable({
    providedIn: 'root'
})
export class OpenBillService {
    private openBillSubject = new BehaviorSubject<OpenBill>({
        isOpenBill: false,
        isOrderPriceLimit: false,
        orderPriceLimit: 0
    });

    public openBill$ = this.openBillSubject.asObservable();

    public get openBill(): OpenBill {
        return this.openBillSubject.getValue();
    }

    public setOpenBillStatus(isOpenBill: boolean): void {
        this.openBillSubject.next({
            ...this.openBill,
            isOpenBill
        });
    }

    public setOrderPriceLimit(limit: number): void {
        this.openBillSubject.next({
            ...this.openBill,
            orderPriceLimit: limit,
            isOrderPriceLimit: false
        });
    }

    public setOrderPriceIsLimit(isOrderPriceLimit: boolean): void {
        this.openBillSubject.next({
            ...this.openBill,
            isOrderPriceLimit
        });
    }
}
