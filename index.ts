

type EventHandler = (event: Event) => void;


// possibly renameable to something more descriptive? because what pair???
interface EventHandlerPair {
    id: number,
    event_name: string;
    handler: EventHandler;
}

export class EventContainer {

    handlers: EventHandlerPair[] = [];
    id: number = 1;

    addEventListener(eventName: string, handler: EventHandler): number {
        const id = this.id++;
        this.handlers.push(
            {
                id: id,
                event_name: eventName, 
                handler: handler
            }
        );
        return id;
    }

    removeEventListenerById(id: number) {
        const index = this.handlers
            .findIndex(
                (handler) => handler.id === id
            );
        
        if (index === -1) {
            return; 
        }
        
        this.handlers.splice(index, 1);
    }

    getEventListeners(eventName: string): EventHandlerPair[] {
        return this.handlers.filter(
            (handlerPair: EventHandlerPair) => {
                return handlerPair.event_name === eventName;
            } 
        );
    }

    protected _getEventHandlers(event: Event): EventHandler[] {
        return this
            .getEventListeners(event.type).map(
                eventHandlerPair => eventHandlerPair.handler
            );
    }

    protected _executeEventHandlers(event: Event, handlers: EventHandler[]): void {
        handlers.map(
            (handler: EventHandler) => {
                handler(event) // should pass event details/context
            }
        );
    }

    // return a map of Array of Promises so the event handler's results
    // can be accessed by the dispatchEvent caller ???
    dispatchEvent(event: Event): void {
        const handlers = this._getEventHandlers(event);
        this._executeEventHandlers(event, handlers);
    }
    
}

export class Event {
    readonly type: string;
    readonly data: object | null;
    constructor(eventName: string, eventData: object | null = null) {
        this.type = eventName;
        this.data = eventData;
    }
}