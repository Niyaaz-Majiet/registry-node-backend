const { gql } = require("apollo-server");

module.exports = gql`
  type RegisterData {
    id: ID!
    name: String!
    surname: String!
    cellNumber: String!
    user: User!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    created_at: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    getRegistryDataByUserId(userId: ID!): [RegisterData]!
    getRegistryDataByRegistryId(registryId: ID!): RegisterData!
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
    addRegister(
      name: String!
      surname: String!
      cellNumber: String!
      user: ID!
    ): RegisterData!
    updateRegister(
      id: ID!
      name: String!
      surname: String!
      cellNumber: String!
    ): RegisterData!
    deleteRegister(id: ID!): RegisterData!
  }
`;
