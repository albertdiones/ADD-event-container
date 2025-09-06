Vision:
An lightweight event driven package, with only the basic necessary functions

Rules:
 1. no production dependencies
 2. if it can be done by an extending package, do not put it here
 

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
 * [x] Fail Test: dispatch with data or event context
 * [x] Pass test: pass the event data to the handler
 * [x] Fail Test: new Event(event_name, event_context)
 * [x] Pass Test: Create new class Event()
 * [x] Fail Test: structure on the event data
 * [x] Pass test: create/update interface for the event data
 * addEventListener() priority parameter, allowing specific handlers to have priority over others
 * addEventListener handler label, which will allow readability or identifiability on the handler
 * addEventListener Schedule???? allowing delayed or deferred handling of the event