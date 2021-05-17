# Intro

# Objective
Functions that return voting results for marketing creative copy, "heat" mapped marketing creatives, and qualified developer leads in a marketplace for desisgn sprint facilitation machmaking targetted at global non-profits, foundational web3 oracle protocols, & American civic projects. The target is Day 80 to get this shipped and in prod

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


## End-to-End Overview

#### Processing

Beginning with the touch point for the end-customer, a developer in their normal day routine, we can expect to utilize a processor that's akin to a Magnifying Glass - borrowing properties on the scope & focal guide. For the peace of mind of both independent and enterprise users, it's important that the tool - both in functionality & experience - reflect the limitations and super powers in tradeoff. Limited fidelity in focused areas could be denoted with artifacts left behind in the exploration path; provisioning and instrumenting the transient analysis. This should follow a common intuition of acting in good faith so the contributors of this project aren't at conflict with how you leverage these tools. Confined information real estate should be a must to adhere to the standards set to ensure parity with the lightweight intra-network request the House will leverage to produce consistent social co-creation sessions.


The tangible deliverable can be expected to be distributed to iOS Shortcuts, in-browser JS local executables, or bash scripts with a standardized set of configs for each provisioning need. The assumption that provisioning & separation of network requests will be table-stakes criteria for this tool to be worthwhile to start running. More importantly, given the transient & context accruing nature of dev workflows, the tool should be designed to incentivize periodic participation both for the overall community and their own network; both in computational & subjective governance participation.

#### Double Opt-In Event Lifecycle

A framework we'll borrow from League of Legends is the Team Select mode that allows each player to define their primary & secondary lane preferences before entering queue for matchmaking in multi-player. What we can abstract is the concept of defining lanes as is literal inn League map and swimming. The key difference here is in knowing the strengths & cascading interests of your teammates, network, & intuition applied in mini-critique-tasks always in live invitation.

While the depth & intricate of each relationship can be maximized with more information, it would suffice to apply translated options enumerated with conditional pagination for future optimization. The key driving principle is striving towards equitable & continuously shrinking gradients in context of communication across languages, cultures, & workflow configuration ("The Culture Map").
Example: Language of choice can make for a great participation facilitation with the intent of eliciting more productive sessions as double-opt ins on repo & profile context accrue.

## The House - API Gateway

> The House operates a set of independent nodes that operate as micro services

1. API Gateway
2. Event log
3. Managed crawler service for non Git sites (blog, auth, portfolio)
4. A task queue for the atomic shared session to record individual metric events that will trigger an aggregation service as a means of clearing the matchmaking & cataloging the session in its respective window and global profile only available utilized for matchmaking

The line item that exist as the primary key for each record is anchored by the commit hash like "d3ae11d966e0641aac118fab551f1273d400af93".

#### Data artifacts

Repository

1. Commit hash
2. Parent commit hash
3. Changed File: Additions
4. Changed File: Deletions
5. Commit date

Social

1. Profile Status & Emoji
2. URL on Profile
3. Organizations joined

Request:

1. The auto-generated commit hash
2. Commit containing Developer A's invitation: d3ae11d966e0641aac118fab551f1273d400af93
3. Commit containing Developer B's response: 8f6d669f2788de928799519db1ecaa9cfed0a9f4

### Possible invocations from activity

1. (user) starred repository [repo]
2. (user) pushed to [repo] <python>
3. (user) [repo] forked <repo>





# Shared Context on Homework on Dev Ops

This is intended for me to test my own understanding by trying to explain the key concepts the Feyman way. So, let's begin.

For the entities that we are managing, we have the ability to get not just the "key" that we're using to query but also a set of bundled decisions that let us know what the Redis Pubisher or Broadcaster has invoked in a low level execution enviroment; leaving you with abstractions for affordance. We'll get into what those are in a second

First, let's be clear that Integers, Strings, Headers, & Reference ID are what we can focus on to get a good grasp on how to tie this web of services into easy to understand control system.

For the Redis cluster, it is able to handle DEL operations in single threaded, maintaining its atomic property, manner but we can actually do better. Well, what does a deletion operation mean anyway? To answer that, it might help to think about the scenarios in which you'd need to get rid of the current version of data, a status update for instance, and decide whether to stop there or to proceed with passing in the latest update as the new truth. This is a good segue into the question of *where* the truth is. Meaning, do we point to the new object, a sentence for simplicity, or do we make overrwite  over the existing variable? Can we just add on top of it and assume whatever is on top is always the truth? Well, surprise, you already just learned how Redis handles it...Let me break this down:

Double Linked List: When the queue that executes & schedules the deletion requests is unable to handle demand surge, or foreshadowing of the alternate, then it leaves you unable to invoke the important broadcasts to clients, listeners, and subscribers on the Pub/Sub pipelining. You're able to play favorites with your Brokers and Consumers - not kidding! Though I could let you in on a little secret: we can just pretend it's gone if we just decouple the key from the value: effectively producing a garbage collection problem. Even more cool: what if you assume that you can just leave it dormant and expect it to adhere to the temporal timers on the EXPIRE commands.

Broadcasts: A mic check in Redis can be performed with the belief that the audience will forget the bad performance. So as a result, it's critical that client-side caching be handled effectively as to not 1) Serve stale date 2) Allow for unfair unmetered access 3) Propagation throughput and scheduling system delay

So in order to deal with this, we need to take a stance. Are we going to focus on creating upside or protecting downside (I forgot which VC said that)? This means the difference between setting up API rate limiting and provisions that require you to rely on data streams and TCP/UDP sockets to bridge the routing, gateway, and data store operations. Lua scripts in Redis can sometimes add just a tiny-micro-no-big-deal second or two as it executes into the Redis thread. This is usually not a big deal but it means that any conditional branching that doesn't create affordances for the "extreme conditions" (as per the design PDF linked in Day 39). You'll need to use the Redis Time datatype which will also need to be handled gracefully on clients who will apply transformations to do localization....and offline.....

Finally, the key intuition about Redis is that the same key can generally be interoperable only as far the Consumer is concerned. The Subscriber can actively access the memory pool, the hot one, to actively stream the data. The atomic nature of the data and its end-use-case will drive new trade-off questions about how clients will handle the fault tolerance, durability, & just-in-time nature of this in-RAM engine & data transmission Worker & Job construct.

Also, gotta now decide between Nginx and Apache. Looking to minimize the calls between an API routing service and the Redis instance. Are they in the same server? Network? Region? Container?

I think it's important for you to not enjoy all of the innuendo from all this data engineering knowledge sharing. For some, it might overflow
