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
)