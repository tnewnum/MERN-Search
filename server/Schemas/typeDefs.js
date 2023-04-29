const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }

  type Query {
    users: [User]
    books: [Book]
    me: User
  }

  # type Auth {
  #   token: ID!
  #   user: User
  # }


  # type Mutation {
  #   login(email: String!, password: String!): Auth
  #   addUser(username:String!, email: String!, password: String!): Auth
  #   saveBook(input: BookInput!): User
  #   removeeBook(bookId: String!): User
  # }
`;

module.exports = typeDefs;
