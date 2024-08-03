import {test, expect} from "@jest/globals"
import {EventContainer} from '..';

test(
    "test working",
    () => {
        const x = 1;
        expect(x).toBe(1);
    }
);

test(
    "new EventContainer()",
    () => {
        new EventContainer();
    }
);

test(
    "addEventListener('event_name', handler)",
    () => {
        const container = new EventContainer();
        const handler = () => console.log('event handled');

        

        expect(container).toHaveProperty('getEventListeners');
        expect(
            container.getEventListeners('battery_low')
        ).toHaveLength(0);

        expect(container).toHaveProperty('addEventListener');

        container.addEventListener('battery_low', handler);

        container.addEventListener('fully_charged', handler);

        expect(container.getEventListeners('battery_low')).toHaveLength(1);
    }
);

test(
    "Container dispatchEvent('event_name')",
    () => {
        const container = new EventContainer();

        expect(container).toHaveProperty('dispatchEvent');
        expect(container.dispatchEvent).toBeInstanceOf(Function);

        let counter = 1;
        container.addEventListener(
            'button_pressed',
            () => {
                ++counter;
            }
        );

        container.dispatchEvent(
            'button_pressed'
        );

        expect(counter).toBe(2);
    }
)