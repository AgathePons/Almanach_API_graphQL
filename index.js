require('dotenv').config();
const debug = require('debug')('Apollo');
const { ApolloServer } = require('apollo-server');
const pool = require('./app/config/pool');

const port = process.env.PORT || 3000;

const typeDefs = require('./app/graphql/schema');
const resolvers = require('./app/graphql/resolvers');
const Auteur = require('./app/graphql/datasources/auteur');
const Tag = require('./app/graphql/datasources/tag');
const Jour = require('./app/graphql/datasources/jour');
const Mois = require('./app/graphql/datasources/mois');
const Entree = require('./app/graphql/datasources/entree');

const config = {
  client: 'pg',
  connection: pool,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true, // ??
  dataSources: () => (
    {
      auteur: new Auteur(config),
      tag: new Tag(config),
      jour: new Jour(config),
      mois: new Mois(config),
      entree: new Entree(config),
    }
  ),
});

server.listen(port).then(({ url }) => {
  debug(`Server listening on ${port} at ${url}`);
});
