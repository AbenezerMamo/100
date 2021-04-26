# Twitch Extensions ENG NOTEPAD / API / POLICY Reference

I thought it would be great to build the hosted facilitated interactions to be multi-player and support deep integration with chat, creator support, and the very very very relaxed (*ahem ahem*) API for allowing viewers to interact. I image we could possibly unlock more safe integrationos since we're doing this open source anyway. I'll try to share other notes but this is obv from Twitch's API docs.

1. CDN < 1MB on init load
2. load in less than 3 sec ~500 kb/s
3. .e., “powered by X” with a corresponding link-off is allowed, but “powered by X and brought to you by Y” is not allowed).
4. Extensions terms (loyalty based points, Bits)
5. Levels of gameplay
	1. timers
	2. energy systems
	3. throttling mechanics
6. Voting activities
	1. Poll
	2. Voting
7. Not allowed
	1. jukebox-like functionality
	2. Gameplay event wagering
	3. Other outcomes beyond the end users control
	4. VOIP-related functionality
	5. Blank free-form text field < pre-populated dropdowns
	6. Twitch could adjust
		1. the amounts set for Bits
		2. UX
		3. marketing
		4. press release
	7. No "cheering"
	8. “money transmission,” “purchase,” “spend,” “buy,” “insert” (such as likening Bits to quarters
	9. Stages
		1. Submit
			1. Unapproved UGC
		2. Publish
			1. Provisioned and in-flight
	10. Forward pagination
		1. Offset
		2. Cursor
	11. Event_timestamp
		1. RFC3339 timestamp (string)
1. Stream Marker
	1. Bearer Token
		1. Identifies the creator of the marker (current point in the stream for bookmark)
	2. Can be created by streamer and editor
	3. Response
		1. desc
		2. position_seconds
2. Content types
	1. Premiers
		1. Scheduled events that can has a countdown
		2. Cyclical showings at 30 min increments
	2. Reruns
		1. "relive their best moments"
3. 
   
4. Sub
	1. Stream has gone online
	2. Broadcaster has a new follower
	3. Broadcaster has  a new subscriber
	4. A user has cheered in a channel
	5. User has redeemed channel points
5. Config
	1. frame-src
		1. Content security policy
	2. Link for notifications that streams in live
	3. For inputs > shutouts, hash PII
	4. Un-triggered callouts???
	5. activation_delay_secs
		1. default 5 min (300)
	6. Secret
		1. Key
			1. base64 enc
			2. -----
			3. EBS JWT
				1. role
					1. exp
						1. Unix epoch timestamp to expire payload
							1. Leave buffer for positive time drift
					2. external
					3. 
		2. Active
			1. UTC stamp on secret activation
				1. Propagate through Twitch & EBS before use?
		3. Expires
			1. JWT verification
	7. JWT Schema
		1. exp
			1. Expiration time since Jan 1, 1970
				1. NumericDate
	8. JWS https://www.rfc-editor.org/rfc/pdfrfc/rfc7515.txt.pdf
		1. Logical values
			1. JSOE Header
				1. Types
					1. Protected
						1. Base64URL (UTF8)
					2. Unprotected
				2. Param names
					1. Registered
					2. Public
					3. Private
			2. JWS Payload
				1. Alg value
					1. ASCII string
						1. StringOrURI value contained
						2. 
			3. JWS Signature
		2. Serializations
			1. Compact URL-safe serialization
				1. 
			2. JSON Serialization
				1. member
			3. s
	9. https://tools.ietf.org/html/rfc7519#section-2
		1. Claim
			1. Name:Value
			2. Information about the assertion made
		2. Audience Claim Identifier
			1. Who it's intended for
			2. Array of case sensitive strings
				1. StringorURI valeu
		3. "exp" Expiration time
			1. Leeway for "clock skew"
			2. Few minutes
			3. 
	10. Stream mining
		1. Challenges
			1. Volume
			2. Temporal nature
			3. Velocity
		2. Trade-offs
			1. Unlike stationary data
				1. Only looked at once
				2. Unbounded in size
		3. Data stream drifting
			1. Changing or evolving data over time
			2. 
6. Rate limits
	1. Msg
		1. 12 per min
			1. 429 on error
	2. Topics
		1. 50 topics per connection
	3. Connections per IP
		1. 10
7. Stream
	1. How do you know delineate the chat messages that come from other extensions


https://dev.twitch.tv/docs/extensions/reference/#jwt-schema
JWT Schema

1. Opque_user_id
	1. U
		1. Across sessions & channels
		2. Persistent service
	2. A
		1. transient references to anon twitch sessions
		2. not logged in
		3. don't associate w/ persistent data
2. Role
	1. Broadcaster
	2. Moderator
	3. Viewer
	4. External


Extension States
1. Testing
2. Hosted_test
3. approved
4. released
5. ready for review
6. in review
7. pending_action
8. uploading



Handling Connection Failures
https://dev.twitch.tv/docs/pubsub#handling-connection-failures



Pub Sub


1. Listening
	1. Clients must listen within 15 seconds of having connected
	2. RECONNECT
		1. Client will disconnect for 30 sec



# Chat Commands

1. Followers - Allows moderators to exclude followers who are within the x time period
	2. 30 Minutes
	3. 1 or 2 Hours
	4. 2 Days
	5. 1 Week
	6. 3 Months
/*
This, while being a very useful feature for moderation, can help us define directional OKRs for our retention goals for users that subscribe to our stream. I was doing some research a while back on iOS app retention and remember the long term being 2 Months that is usually measured. Entirely different products and references for measure (this is a sample of like 5k apps I think). However, there should be power law distributions for streamers like SKT or whatever team is good at whatever game. Generally, a more interesting metric to measure for platforms is the number of {apps, services, subs, activations, installs} or something along those lines (based on some Oculus metrics I heard about and also for Echo). For us, this is mainly important because we'll want to host a variety of end user experiences and touchpoints to figure out the entry point and offramp affordance that will make for the most meaningful and producttive outcome.
*/

## Commercials
// Given the ability to 

## Platform stats
// DigiDay
15M daily in 2018 estimated
//AdGuideToTwitch
2.2M active ccreators per month
106 minutes per person watch time
10% of individual streamers account for 95% of the views
// Personally, you shouldn't take the above to be negative. Typical social networks are 90/9/1 (consume, engage, and create respectively) as of the early days of social. 

# Reawrds
Rewards can be redeemed by a 3rd party or the viewer in form of Bits that are respresented across the Twitch platform. These can be earned from in-game or stream activity.


// Contributions
1. Bits
2. Subscriptions

// Reward (item)
1. Prompt - reward desc.

// Updates
1. is_user_input_required - wether or not the user needs to provide input to redeem the item

// Cooldowns
There can e cool downs on the on specific rewards.

Redeemed_at
// RFC3339 Timestamp of when reward was redeemed

// Hypetrain
1. total - points towards hypetrain
2. progress - points at current level
3. goal - points until next level reached
4. started_at - when the hype train started
5. expires_at - when it ends but can be extended by new level unlocks


# STreams
// Types
1. Live
2. Playlist
3. Watch_Party
4. Premiere
5. Rerun



