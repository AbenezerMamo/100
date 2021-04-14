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
