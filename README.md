

Requirements:
 * a function e.g. addEventListener('candle_updated', () => {})
 * a function for dispatching event dispatchEvent('candle_updated')
 * a test confirming that dispatching an event triggers a handler

ETA: 4:19PM to 6:19PM

Todo List:
 * [x] -Git init and push to github-
 * [x] -Research if Bun has a built in event handler-
 * [x] Install dependencies
    *# jest
 * [x] Fail test: new EventContainer()
 * [x] Pass Test ~ create EventContainer class
 * [x] Fail Test: container1.addEventListener('event_name', handler)
    ** container2.addEventListener('event_name',handler);
 * [x] Pass Test ~ create addEventListener() function
 * [x] Fail Test: container1.dispathEvent('event_name2')
 * [x] Pass Test ~ create dispathEvent() 
 * [x] Fail Test: container1.dispathEvent('event_name') ~ check if handler is triggered
 * [x] Pass test ~ triggers handlers on event