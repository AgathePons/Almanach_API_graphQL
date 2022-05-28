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
  /* tag: async (_, { id }, { dataSources }) => {
    debug('tag');
    const tag = await dataSources.tag.getTagById(id);
    return tag;
  }, */
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
  entrees: async (_, __, { dataSources }) => {
    debug('entrees');
    const entrees = await dataSources.entree.getEntrees();
    return entrees;
  },
};
