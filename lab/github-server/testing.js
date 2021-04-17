// This is an attempt to cover some key data requirements


// Truth oracle for stale data locally'
profile.update_latest_project({username: "COMMIT-HASH"})


// Viewing the current status of a session_in_queue
// Assume some list will propogate via a specific end point to update a list of active sessions or tasks to be handeled


// Verify the pull request that binds an activity
// GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions and look for values that are essentially positive integers for double-thumbs-up (+1, +1) and thumbs-down easily transalte to -1

// Verify that the 10 Issues in cache are the ones that adhere to the time restrictions
// GET /repos/{owner}/{repo}/isssues
// SINCE: (ISO_FORMATED_DATE)
// There should exist a scheduled job that prunes this finite list based on order, relevance, or filter applied
