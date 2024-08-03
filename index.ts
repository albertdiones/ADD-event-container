

export class EventContainer {

    handlers: Function[] = [];

    addEventListener(eventName: string[], handler) {
        return this.handlers.push(handler);
    }

    getEventListeners(eventName: string[]) {
        return this.handlers.length;
    }
    
}