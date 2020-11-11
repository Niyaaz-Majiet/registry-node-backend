const registryResolvers = require('./registry');
const usersResolvers = require('./users');

module.exports = {
  Query: {
    ...registryResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...registryResolvers.Mutation
  }
};