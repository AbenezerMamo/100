// Consumer outline

/*
Set of heuristics we'll use for the end-to-end "tracing" of an event to a metric

Profile.updateChanges(
{
  {
  "repo":
    {
      repo_name:
        {
        "commits":
         {
          authored_date,
          message,
          repo_id
        },


    },
    {"commits": {
    authored_date,
    message,
    repo_id,
    relative_reference_to_HEAD,
    tag
  }
}
}

)
COMMIT ID
Also known as SHA. A 40-character checksum hash that identifies the commit.

*/
// Appending a new set of




/*
References:
http://modeling

-languages.com/wp-content/uploads/2015/08/schema-v5.png
*/

// Relationships
/*
LINE_NUMBER : FILE


COMMIT_STREAKS_BOARD : DATE

*/

const redis = require("redis");
const client = redis.createClient();
const jsonify = require("jsonify");

client.on("error", function (error) {
    console.log(error);
})

client.set("username", "1092labs-crawler", redis.print);
client.get("username", redis.print);

const repo = "hi";
client.hset(repo, 100, function(err, reply) {

    console.log(err);
    if (!err) {
    console.log(reply);
    }
});

client.get(repo, function (err, reply) {
  console.log(reply);
  console.log(redis.print);
});
// client.get("repo", redis.print);

// wait(3000);
// client.end(true);
