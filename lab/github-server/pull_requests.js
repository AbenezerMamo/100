// Pull Requests API


// Operations
/*
- view
- list
- edit
- merge

Every pull request is an issue

Filter for issues:
1. Assigned (to us)
2. Created (by us)
3. Mentioned (At Us)
4. Subscribed (To issues)


Sort Filters:
1. Created
2. Updated
3. Comments

(Results for page 100 max)

Preview API media type for emoji payloads "application/vnd.github.squirrel-girl-preview"

Using Reactions content parameter value: (recommended)
👍 (+1)
👎 (-1)


Reactions for an issue Comment (API)
GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions


List repository isssues

GET /repos/{owner}/{repo}/isssues
SINCE: ISO 8601 format

PATCH /repos/{owner}/{repo}/issues/{issue_number}
LABELS: Pass in empty [] to clear

PUT /repos/{owner}/{repo}/issues/{issue_number}/lock
LOCK-REASON:
1. off-topic
2. too-heated
3. resolved
4. spam

*/
