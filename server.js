const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const myGraphQLSchema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: myGraphQLSchema,
  graphiql: true
}))

app.listen(4040, () => {
  console.log('server 4040. portta çalışıyor');
})
