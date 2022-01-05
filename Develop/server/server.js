const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');

const path = require('path');
const db = require('./config/connection');
<<<<<<< HEAD
//const routes = require('./routes');
=======
const routes = require('./routes');
>>>>>>> 6615680ecc789b5016f7e606fe6bf5a409499dc4

const { typeDefs, resolvers } = require('./schemas');

const app = express();
const PORT = process.env.PORT || 3001;


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
})

//Apollo server using express application and middleware
server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
<<<<<<< HEAD
//if (process.env.NODE_ENV === 'production') {
  //app.use(express.static(path.join(__dirname, '../client/build')));
//}
//app.get('*',( req, res) => {
  //res.sendFile(path.join(__dirname,'../client/build/index.html'));
//});
=======
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('*',( req, res) => {
  res.sendFile(path.join(__dirname,'../client/build/index.html'));
});
>>>>>>> 6615680ecc789b5016f7e606fe6bf5a409499dc4

//app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log('Use GraphQL at http://localhost:${PORT}${server.graphqlPath}');
  });
});

process.on('uncaughtException', function(err) {
  console.log('Caught exception:' + err);
});
