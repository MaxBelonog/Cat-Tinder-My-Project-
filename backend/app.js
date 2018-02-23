var express = require('express');
var Cat = require('./src/models').Cat
var bodyParser = require('body-parser');
var validator = require('express-validator')
var app = express();

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(validator())

app.set('view engine', 'ejs')
app.set('view engine', 'ejs') //leting the expll be using ejs...ress know wi


app.get('/', (req, res) => {
    res.json({ message: ' wow Welcome to Cat Tinder' })
});

app.get('/cats', (req, res) => {
    Cat.findAll().then((cats)=>{
        res.json({ cats: cats})
    })
})

app.post('/cats', (req, res) => {

    //Validation of name,age,hobbys...
    req.checkBody('name', 'Is required').notEmpty()
    req.checkBody('age', 'Is required').notEmpty()
    req.checkBody('enjoys', 'Is required').notEmpty()

    //runing validations...
    req.getValidationResult()
        .then((validationErrors) => {

            // If there are no errors, go ahead and create cat
            if (validationErrors.isEmpty()) {
                Cat.create({
                    name: req.body.name,
                    age: req.body.age,
                    enjoys: req.body.enjoys
                }).then((cat) => {
                    res.status(201)
                    res.json({ cat: cat })
                })
            } else {

                // Uh ohh,  there were validation issues.  Report them back to the user.
                res.status(400)
                res.json({ errors: { validations: validationErrors.array() } })
            }
        })
})


module.exports = app
