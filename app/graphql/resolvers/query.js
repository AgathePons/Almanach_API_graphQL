const debug = require('debug')('Resolvers:Query');

module.exports = {
  // Auteur
  auteurs: async (_, __, { dataSources }) => {
    debug('auteurs');
    const auteurs = await dataSources.auteur.getAuteurs();
    return auteurs;
  },
  auteurById: async (_, { id }, { dataSources }) => {
    debug('auteur');
    const auteur = await dataSources.auteur.getAuteurById(id);
    return auteur;
  },
  // Tag
  tags: async (_, __, { dataSources }) => {
    debug('tags');
    const tags = await dataSources.tag.getTags();
    return tags;
  },
  tagById: async (_, { id }, { dataSources }) => {
    debug('tag');
    const tag = await dataSources.tag.getTagById(id);
    return tag;
  },
  // Jour
  jours: async (_, __, { dataSources }) => {
    debug('jours');
    const jours = await dataSources.jour.getJours();
    return jours;
  },
  jourById: async (_, { id }, { dataSources }) => {
    debug('jour');
    const jour = await dataSources.tag.getJourById(id);
    return jour;
  },
  // Mois
  mois: async (_, __, { dataSources }) => {
    debug('mois');
    const mois = await dataSources.mois.getMois();
    return mois;
  },
  moisById: async (_, { id }, { dataSources }) => {
    debug('mois');
    const mois = await dataSources.tag.getMoisById(id);
    return mois;
  },
  // Entree
  entrees: async (_, __, { dataSources }) => {
    debug('entrees');
    const entrees = await dataSources.entree.getEntrees();
    return entrees;
  },
};
