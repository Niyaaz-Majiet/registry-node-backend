// allows express to understand graph ql
const {ApolloServer} = require("apollo-server");

const typeDefs = require('./graphql/type_defs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({ port: 5000 });