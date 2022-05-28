const debug = require('debug')('Resolvers:Query');

module.exports = {
  auteurs: async (_, __, { dataSources }) => {
    debug('auteurs');
    const auteurs = await dataSources.auteur.getAuteurs();
    return auteurs;
  },
  tags: async (_, __, { dataSources }) => {
    debug('tags');
    const tags = await dataSources.tag.getTags();
    return tags;
  },
  jours: async (_, __, { dataSources }) => {
    debug('jours');
    const jours = await dataSources.jour.getJours();
    return jours;
  },
  mois: async (_, __, { dataSources }) => {
    debug('mois');
    const mois = await dataSources.mois.getMois();
    return mois;
  },
};
