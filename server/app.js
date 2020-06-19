const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Collin:dbconnect@cbcv-hums7.mongodb.net/cbcv?retryWrites=true&w=majority');
mongoose.connection.once('open', ()=>{
  console.log('you on that db, bro');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000, my guy')
});
