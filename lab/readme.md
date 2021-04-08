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
