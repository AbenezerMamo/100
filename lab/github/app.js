const express = require('express')
const app = express()
const port = 3000
const http = require('http')
const Github = require("github-api")


var gh = new Github()

user = '1092labs-crawler';
gh.getUser(user).listNotifications(function(err, repos) {
console.log(repos)
});

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
  uID = req.params.username;
  git_info = http.get("http://api.github.com/users/" + (uID), res => {
    console.log(app.res)
  });
  res.format({
    'application/json': function () {
    res.redirect('/status/'+ uID)
  }
});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
