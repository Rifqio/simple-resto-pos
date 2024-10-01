import { TableStatus } from "@enum/index";

export class Table {
    number: number;
    capacity: number;
    status: TableStatus;
    occupiedAt?: Date;
    reservedBy?: string;
    reservedAt?: Date;
    reservedUntil?: Date;

    constructor({ number, capacity, status, occupiedAt, reservedBy, reservedAt, reservedUntil }: { number: number, capacity: number, status: TableStatus, occupiedAt?: Date, reservedBy?: string, reservedAt?: Date, reservedUntil?: Date }) {
        this.number = number;
        this.capacity = capacity;
        this.status = status;
        this.occupiedAt = occupiedAt;
        this.reservedBy = reservedBy;
        this.reservedAt = reservedAt;
        this.reservedUntil = reservedUntil;
    }
}