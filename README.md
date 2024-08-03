

Requirements:
 * a function e.g. addEventListener('candle_updated', () => {})
 * a function for dispatching event dispatchEvent('candle_updated')
 * a test confirming that dispatching an event triggers a handler

ETA: 4:19PM to 6:19PM

Todo List:
 # [x] -Git init and push to github-
 # [x] -Research if Bun has a built in event handler-
 # [x] Install dependencies
    ## jest
 # [x] Fail test: new EventContainer()
 # [x] Pass Test ~ create EventContainer class
 # Fail Test: container1.addEventListener('event_name', handler)
    ## container2.addEventListener('event_name',handler);
 # Pass Test ~ create addEventListener() function
 # Fail Test: container1.dispatch('event_name2')
 # Pass Test ~ create dispatch()
 # Fail Test: container1.dispatch('event_name') ~ check if handler is triggered
 # Pass test ~ triggers handlers on event