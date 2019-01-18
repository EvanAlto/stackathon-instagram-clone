const path = require('path')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const graphqlHTTP = require('express-graphql');
const PORT = 8080
const app = express()
module.exports = app

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// compression middleware
app.use(compression())

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

// app.use('/graphql', graphqlHTTP({
//   schema: MyGraphQLSchema,
//   graphiql: true
// }))

app.listen(PORT, function () {
  console.log(`Your server, listening on port ${PORT}`)
});