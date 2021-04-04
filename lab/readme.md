# Intro

# Objective


# Context


# Where
Public artifact (demo):
More documentation:
Support/help: Github issues or Mamo@1092labs.com



# How?
Design experiments that are repeatable by sharing a common layer.

# When?

## Today

### Simple event log for webhooks

The goal of this event log is to have a place where different work on different parts of the stack can allow us to map a path that is best abstracted to an interoperable journey map. This is like any other log file but API gated privately for now but soon to open up to you so you can also begin contributing data while progress on the other services and infra is ongoing.

### Git-Paid Web Hooks Event Store

For the client, we expect there to be some confirmation between two user's before an event is accepted into the store with little more than syntax parsing.

(There should be some notion of a public event that's verifiable, temporal but referenceable, & indexed for compliance. One possibility is to consider hosting this artifacts on Github and creating a new document, entry, or even issue for a queue that processes requests for verifying double-opt in on a layer above Github. Simply: I should be able to decide as a user if my friend, a follower, omits a valid & verified activity event. It is both responsible way to build on the social graph and network activity so that there's at baseline little to no negative outcomes for the users, content, or the platform. Using public ways to orchestrate these interactions allows us to safely move quickly on connecting user profile metadata, repo change observers, & on-client data processing to handle PII, file ignore rules/checks, & double opt-in process while only worrying about a semi-public event log that accepts any entry but will not use it for orchestrating intra-network, intra-client, intra-repo interactions or long-term data custodianship. For concerned users, platforms, or compliance purposes, 1092 Labs will provide the first set of records in backup and cold storage but it's expected that for the time being: git will be enough. We will only need to worry about intelligently managing both user and service facing API ratelimitings. A queue service will also be temporarily hosted for the lab but the expectation is that the community should be able to put up a node that can help orchestrate community resources like these. For governing & administrating these relationships, smart contracts and Ethereum could be future considerations to be able to abstract as much to be actually open source. This includes the local and 0-1 stage infrastructure that allows teams and individuals to operate decentralized & with empowerment from the org / platform design that's akin to Amazon's model of having individual business, platform, and product units that can leverage and co-allocate resources with shared interests.) [WIP. Need to break this up into different sections.]
