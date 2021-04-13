const amqplib = require("aqmplib")

// The tasks that we'll be expecting need to be based on a serial key that can be interoperable across Github, "issues"
far q = 'tasks';

require('amqplib/callback_api')
  .connect('amqp://localhost', funciton (err, con)
  { if (err != null) bail(err);
    consumer(conn);
    // Because these are inherently independent sessions for each line item, I can attest to periodically cyclical propogations to the matchmaking service would yield best results when scaling these different services
    // For instance, I might consider 8 AM PST for Americans and 8 PM (PDT) for India to be two cyclical time zones to align to two large developer communities


    publisher(conn);
// As your activity data stream packs with team & community updates, it might make sense to consider a local queue service that operates on a set of conditional rules that adhere to strict inclusion / exclusion filters and flags set for high alert activity (based on user, repo, org, etc...)

// Once you're ready to invoke a double-opt-in request, you'll need to tag your buddy in-line so Github can notify them of your mention & they'll be easily deep-link to the specific Issue

// We offload to a seperate watchtower service the task of expending API requests to periodically check the Issue thread for veriable confirmation (automated or moderated)



});


// Requires a rabitmq instance running
// Via docker: docker pull rabbmitmq
