// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Book {
    _id: ID!
    bookId: String
    authors: [String]
<<<<<<< HEAD
=======
    # authors: String
>>>>>>> 6615680ecc789b5016f7e606fe6bf5a409499dc4
    description: String
    title: String
    image: String
    link: String
  }


type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
}

type Query {
    me: User  
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
}

type Auth {
    token: ID!
    user: User
  }
`;



// export the typeDefs
module.exports = typeDefs;