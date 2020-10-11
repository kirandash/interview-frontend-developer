# JS Questions

### Q1. Explain concurrency and event loop in JS.
1. JS is a single threaded language. Thus can execute only one task at a time. 
2. All the fn calls are added to the **fn stack** followed by `main()` fn which represents the main file itself.
3. Each fn call will execute one at a time. And once executed will be moved out of the stack.
4. If a fn has async calls viz setTimeouts are managed under **web APIs(for browser)** ex: `setTimeout`, `ajax(XMLHttprequest)`, `DOM(document)`. Although JS is single threaded. Browser can handle multiple tasks at one time. 
    - and once a task in web APIs is finished, the callback fn is added to the **event/callback queue**. ex: `onLoad`, `onClick`, `onDone` etc
5. events in callback queue wait for the current stack to finish. And once that is finished: the events from callback queue will move to the fn stack. one at a time.
6. Thus finishing our event loop.
7. Additionally there is a **render queue** - which tries to render every 16ms. If we put synchronous tasksk in main task: render queue will wait and thus any click events won't work on the page.
8. **render queue** is given priority over callback queue.
9. Note: "DON'T PUT TOO HEAVY OR SLOW THINGS ON MAIN STACK"
    - Ex: Scroll event can cause a lot of callbacks to queue. Thus better to use **debounce**. Debounce will make sure that the callback is created only for specific intervals and not for every scroll.

### Q2. What is blocking?
1. For better perfomance: it is better to not have blocking/slow code in our fn stack. So, we should have fns with async calls. We execute the fn -> move it out of the call stack and then wait for the callback.

### Q3. HTTP Protocols?
1. What is HTTP?
    1. Hyper Text Transfer Protocol
    2. Communication b/w web servers & clients
    3. HTTP requests and responses
    4. Ex: Loading pages, form submits, ajax calls etc
2. HTTP is stateless?
    * Every request is independent
    * Similar to transactions
    * Programming, localStorage, cookies, sessions etc. are for UI
3. HTTPS?
    * HTTP Secure
    * Data sent is encrypted
    * SSL / TLS (secure sockets layer) / (transport security layer)
    * Install certificate on web host
4. HTTP Methods:
    * GET
    * POST
    * PUT/PATCH
    * DELETE
5. HTTP Header Fields
    * General Header: url, method, status code, address, policy
    * Response Header: server, set cookie, content-type, content-length, date
    * Request Header: Cookies, accept-xxx, content-type etc.
6. HTTP Status Codes:
    * 1xx - processing
    * 2xx - success
    * 3xx - redirect
    * 4xx - client error
    * 5xx - server failed
    * 200 - ok, 201 - ok create, 301 - moved to new URL, 304 - not modified, 400 - bad request, 401 - unauthorized, 404 - not found, 500 - internal server error

### Q4. Relational Data base indexing?
1. Index: helps quering DB faster.
    - ordered arrangement of DB items.
