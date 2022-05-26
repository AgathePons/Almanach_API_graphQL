require('dotenv').config();
const debug = require('debug')('Apollo');
const { ApolloServer, gql } = require('apollo-server');

const port = process.env.PORT || 3000;

const typeDefs = gql`
  # Auteur
  type Auteur {
    pseudo: String
  }

  # Query
  type Query {
    auteurs: [Auteur]
  }
`;

const auteurs = [
  {
    pseudo: 'Thomas Munier',
  },
  {
    pseudo: 'Autre gars',
  },
];

const resolvers = {
  Query: {
    auteurs: () => auteurs,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen(port).then(({ url }) => {
  debug(`Server listening on ${port} at ${url}`);
});
