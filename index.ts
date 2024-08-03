


type EventHandler = () => void;


// possibly renameable to something more descriptive? because what pair???
interface EventHandlerPair {
    event_name: string;
    handler: EventHandler;
}

export class EventContainer {

    handlers: EventHandlerPair[] = [];

    addEventListener(eventName: string, handler: EventHandler) {
        return this.handlers.push(
            {
                event_name: eventName, 
                handler: handler
            }
        );
    }

    getEventListeners(eventName: string) {
        return this.handlers;
    }
    
}