import { Injectable } from '@angular/core';


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
    log(message: string): void {
        console.log('[LOG] ' + message);
    }

    error(message: string): void {
        console.error('[ERROR] ' + message);
    }

    warn(message: string): void {
        console.warn('[WARN] ' + message);
    }

    info(message: string): void {
        console.info('[INFO] ' + message);
    }

}
