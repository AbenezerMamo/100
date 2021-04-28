# Process of building the backend service that will handle both sockets and gateways (pre-Redis)

Adapters
1. Create
2. Incoming connection
3. Disconnecting (optional)
4. Binding messages to otheir respective handlers
5. Disconnect

## Communicating w/ more than 1 node
One possible solution:
1. Extending the IoAdapter
	2. Overriding a function that establishes the connections


send() method
1. Returns a "cold" Observable b/c you'll need to subscribe explicitly before recieving the message


emit() method
1. Returns a "hot" overservable that doesn't require explicit subscription to get broadcast from proxy

RxJS for timeouts
1. If the alloted time before exception flag is exhausted, it should be expected to be handled gracefully


### Source
1. https://docs.nestjs.com/microservices/basics#event-based

## Process Sigma
1. Process variation relative to requirements
2. Requirements
A. Upper tolerance limit
B. Lower tolerance limit



