Adhering to the requirements that Twitch sets out in their developer policy guide and agreement.

We will be leveraging Github & Twitch to be touch points for collaborative, few-to-many, and meet developers with the video or text format that fits their preference.
I'll be going through their documentation to extract endpoints, guides, & criteria that I find are both helpful for scoping eng work but also having content and creative copy (words/images/theme) to create consistent and familiar interaction mechanisms and product education. Now, having that be open source and having the golden nuggets in one page is certainly going to cost me some trust points because I plan on being able to ask for special provisions for certain API rate-limits so that I can leverage the platform to the greatest and mutually aligned potential. Twitch live coding, and the products it has spawned, is already a validated user behavior and market demand. So as I share open source, and not conflicting with profit or political agendas, I ask that you be kind in leveraging what i share with you. My hope is that it helps accelerate the devleopment of these initatives and efforts. If I can make that clear, then you'd believe me when I say that I would pay for a security audit before this ships. Might still cheap out and stack some AWS promo codes.Enjoy!


1. Use
- UserID
- AppID
- SessionID
- Previous 2 Hours within Follow
- Upto 3 months lookback for moderation until auth token expires
3. Display
- Display names
- Broadcast events that are visible to all viewers
- Broadcast events that are within the scope of the extension
5. Share
- Either the streamer or the editors can provision the "share a screen" like collaborative feature. I don't know how this will work yet but I plan on leveraging either a hosted stream server (OBS on the cloud for example) or leverage their programatic advertising infra to be able to serve custom media directly into a stream and also be able to have the deep attribution/measurement that comes along with it. Now given that Twitch has raised $60M+ for charities, I think there is already existing precedence to show that "social benefit corp"-like open-source initaitives could maybe be whitelisted the API endpoints or data insights that we could clearly prove serve both the community here and don't conflict with Twitch's interest in not having us be a means of having people spend less quality time, if ever even at all less than baseline. Other than that, they have good sandbox and abstractions for safeguards. I might look into iCloud containers because they have a pretty good model for private to public sharing model. Example: If you wanted to share a shortcut, you'd have to share the iCloud link to it but that's something that Apple can take down AND remains unchanged I believe. Also, you'd have to first allow 3rd party shortcuts to run - an active change to the default that also doesn't allow access to iCloud. Obviously, I'm going to take a lot of inspiration but please assume I'm doing a lot more than it looks like to not screw it up and be banned on the 1 or few facilitation accounts we are allowed. 
- Most important, the moment I and this effort facilitates anything for anyone but myself, it instantly brings liability that I have to bare. So don't judge me for being scared. You should always feel scared. If you don't, you'll find that systems have delays. You're enjoying the privilage of the positive actions you did yesterday. Now, when it comes to the b.s......you feel the feedback loops pretty quickly. Then tacit knowledge turns into tactile 0 to the edge.......real quick. I've learned and now I'm more interested in earning more trust from these huge platforms. So whatever you read, get ready to now find an API endpoint for soon.
7. Store
- What is provisioned to be presented in the stream
- Chat logs to the extension, from the extension, and on the backend of the extension
9. Retain
- This one is hard and very scary. I'll need to get written signoff from Twitch on this. I'll do it here openly and expect their official dev Github account to suffice. This is uncomfortably hard so please see that I'm trying. This is the important stuff that if you miss or disregard, you definitely won't be having a ratelimit conversation ;)


