const express = require('express')
const path = require("path")

const people = require('./people.json')
const app = express()
const router = express.Router();

app.set('view engine', 'pug')
app.use(express.static('./public'))
app.use('/api', router);


app.get('/', (req, res) => {
    res.render("index", {
        title: "Homepage",
        people: people.profiles
    })
})

app.get("/profile", (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id)
    res.render("profile", {
        title: `About ${person.firstname} ${person.lastname}`,
        person,
    })
})

app.get('/api', function(req, res) {
    res.status(200).send('Hello World API')
});



const port = process.env.PORT || 8080;

// Start the app

app.listen(port, () => {
  console.log('App started on port: ' + port);
});