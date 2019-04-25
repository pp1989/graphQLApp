const bodyParser = require('body-parser');
const restify = require('restify')
const cors = require('cors');
const express = require('express');
const db = require('./db');
console.log("show all the data>>:",JSON.stringify(db.students))


// const port = process.env.PORT || 9000;
const port = 9000;
const app = express();
const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql', { encoding: 'utf-8' })
const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')
const schema = makeExecutableSchema({ typeDefs, resolvers })
app.use(cors(), bodyParser.json());
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express')
// const { graphiqlExpress, graphqlExpress } = require('express-graphql');
// console.log("graphiqlExpress",graphiqlExpress);
console.log("-------------------")
// console.log("graphqlExpress",graphqlExpress);
// graphqlExpress(request => ({
//     schema: typeDefinitionArray,
//     context: { user: request.session.user }
//   }))

app.use('/graphql', graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.listen(port, () => console.info(`Server started on port ${port}`));