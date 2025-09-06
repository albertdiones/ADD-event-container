import {test, expect} from "@jest/globals"
import {EventContainer, Event} from '..';

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

        const id1 = container.addEventListener('battery_low', handler);

        expect(id1).toEqual(1);

        const id2 = container.addEventListener('fully_charged', handler);
        
        expect(id2).toEqual(2);

        expect(container.getEventListeners('battery_low')).toHaveLength(1);
    }
);

test(
    'new Event()',
    () => {
        const click = new Event('click',{keyCode: 123});

        expect(click).toBeInstanceOf(Event);
    }
)

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
            new Event('button_pressed')
        );

        expect(counter).toBe(2);
    }
)


test(
    "Container dispatchEvent with event context",
    () => {
        const container = new EventContainer();

        expect(container).toHaveProperty('dispatchEvent');
        expect(container.dispatchEvent).toBeInstanceOf(Function);

        let lastKeyPress = 'x';
        container.addEventListener(
            'last_key_pressed',
            (event: Event) => {
                const data = event.data;
                lastKeyPress = data.key_pressed;
            }
        );

        container.dispatchEvent(
            new Event(
                'last_key_pressed',
                { 'key_pressed': 'z' }
            )
        );

        expect(lastKeyPress).toBe('z');
    }
);