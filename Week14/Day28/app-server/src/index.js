require('./models/User')

// import express
const express = require('express')
// import mogoose to communicate with mongoDB
const mongoose = require('mongoose')
//import bodyprser for handling our
const bodyParser = require('body-parser')

//import our authRoutes
const authRoutes = require('./routes/authRoutes')

//our one time available URI, put it in a .env for safe keeping and DONT push this into GitHUB
const mangoUri= 'COPY_PASTE_FROM_ENV_TO_CONNECT'
// connect to our DB via mongoose
mongoose.connect(mangoUri)

// think of this as an event listener 
mongoose.connection.on('connected', () => {
    console.log('Successfully conncected to our mongo instance!')
})

//listening to error as well
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongo', err)
})

// create an app object, this is our application
const app = express()

//enable the ability to parse JSON from the body of reqs/ress
app.use(bodyParser.json())

//use the router 
app.use(authRoutes)

// our first route handler, any time a user makes a request to '/'
// run the function (second argument)
// req = request, res = result/response
app.get('/', (req, res) => {
    // for now send back a plain text message
    res. send ('Moo first express route!')
})

// have our app listen on a specific port on our machine 
app.listen(3000, () => {console.log('Listening on port 3000')})

