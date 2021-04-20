const app = require('express')()
const session = require('express-session')
const redis = require('redis')


const publisher = redis.createClient()


const http = require('http')


const port = 4000;

user = '1092labs-crawler';

app.get('/status/:username', (req, res) => {
  name = req.params.username;
  console.log(name);
});

app.get('/add_hook/:id', (req, res) => {
  id_param = req.params.id;
  console.log(id_param);
  res.redirect('/status/' + id_param)
})


app.get('/profile/:username', (req, res) => {
  var blob = "";

  uID = req.params.username;

  git_info = http.get("http://api.github.com/users/" + (uID), res => {
    console.log(res);
  });

  blob = git_info;

  console.log(blob);
  publisher.set("username", uID, redis.print);
  publisher.get("username");
  publisher.publish();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
