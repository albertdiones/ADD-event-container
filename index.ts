


type EventHandler = () => void;


// possibly renameable to something more descriptive? because what pair???
interface EventHandlerPair {
    event_name: string;
    handler: EventHandler;
}

export class EventContainer {

    handlers: EventHandlerPair[] = [];

    addEventListener(eventName: string, handler: EventHandler): void {
        this.handlers.push(
            {
                event_name: eventName, 
                handler: handler
            }
        );
    }

    getEventListeners(eventName: string): EventHandlerPair[] {
        return this.handlers.filter(
            (handlerPair: EventHandlerPair) => {
                return handlerPair.event_name === eventName;
            } 
        );
    }

    // return a map of Array of Promises so the event handler's results
    // can be accessed by the dispatchEvent caller ???
    dispatchEvent(eventName: string): void {
        const handlers: EventHandler[] = this
            .getEventListeners(eventName).map(
                eventHandlerPair => eventHandlerPair.handler
            );
        
        handlers.map(
            (handler: EventHandler) => {
                handler(/* data */) // should pass event details/context
            }
        );
    }
    
}