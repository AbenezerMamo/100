const io = require("socket-io")(4000,
{
  path: "/socket.io",
  serveClient: false,
  connectTimeout: 45000,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false

});
allowRequest()


// IO factory Operations

// Manager instance
io.reconnect({
  // some rules on throttling on request
})

// Namespaces - multiplexing

// server
// Default Namespaces

// Admin namespace

const adminNamespace = io.of("/admin");

adminNamespace.use(io("/"), next) => {

}

adminNamespace.on("connection", socket => {

})


// queue


// Bindings

queue.priority_set( {
  verification_sources: 10,
  since_last_request: 12
})


// Properties of exchanges
// Durable


// Transient



// Managing the profile level changes
// For users to select from the maximized capacity of rank matched pool of developers, it would be wise to make tradeoffs to independently handle verification requests for transaction stages; process a batch if desirable pool fill-rate requires serving a lower quality but quicker validation batch; and to consider the moving & hopefully declining session windows at each stage. These allow for us to react more in lock-step with behavioral variance introduced over time. More importantly, decentralizing these sevices would only be possible if there are intra-network hops that can optimize routing (similar to side-channels in blockchain) and design with optimistic UI & UX with-in bounds of what human trust can afford us today.


// Fanout exchanges
// What would a developer need to pull before commiting new changes to the network?
