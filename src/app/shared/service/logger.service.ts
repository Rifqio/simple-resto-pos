import { Inject, Injectable } from '@angular/core';


interface ILogger {
    log(message: string): void;
    error(message: string): void;
    warn(message: string): void;
    info(message: string): void;
}

@Injectable({
    providedIn: 'root'
})

export class LoggerService implements ILogger {
    public instance: string = '';

    constructor(@Inject(String) instance: string) {
        this.instance = instance;
    }

    log(message: string): void {
        console.log(`[${this.instance}, LOG]  ${message}`);
    }

    error(message: string): void {
        console.error(`[${this.instance}, ERROR]  ${message}`);
    }

    warn(message: any): void {
        console.warn(`[${this.instance}, WARN] ${message}`);
    }

    info(message: any): void {
        console.info(`[${this.instance}, INFO]  ${message}`);
    }

}
