var express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send('Hello Worlds!')
  })

  app.get('/test', (req, res) => {
    res.send('Hello test!')
  })

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port 3000`)
})