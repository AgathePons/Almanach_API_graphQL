/* eslint-disable camelcase */
const debug = require('debug')('Resolvers:Query');

module.exports = {
  // Auteur
  auteurs: async (_, __, { dataSources }) => {
    debug('auteurs');
    const auteurs = await dataSources.auteur.getAuteurs();
    return auteurs;
  },
  auteurById: async (_, { id }, { dataSources }) => {
    debug('auteur by id');
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
    debug('tag by id');
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
    debug('jour by id');
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
    debug('mois by id');
    const mois = await dataSources.mois.getMoisById(id);
    return mois;
  },
  // Entree
  entrees: async (_, __, { dataSources }) => {
    debug('entrees');
    const entrees = await dataSources.entree.getEntrees();
    return entrees;
  },
  entreeById: async (_, { id }, { dataSources }) => {
    debug('entree by id');
    const entree = await dataSources.entree.getEntreeById(id);
    return entree;
  },
  entreesByAuteur: async (_, { auteur_id }, { dataSources }) => {
    debug('entrees by auteur_id');
    const entrees = await dataSources.entree.getEntreesByAuteurId(auteur_id);
    return entrees;
  },
  entreesByTag: async (_, { tag_id }, { dataSources }) => {
    debug('entrees by tag_id');
    const entrees = await dataSources.entree.getEntreesByTagId(tag_id);
    return entrees;
  },
  entreesByJour: async (_, { jour_id }, { dataSources }) => {
    debug('entrees by jour_id');
    const entrees = await dataSources.entree.getEntreesByJourId(jour_id);
    return entrees;
  },
  entreesByMois: async (_, { mois_id }, { dataSources }) => {
    debug('entrees by mois_id');
    const entrees = await dataSources.entree.getEntreesByMoisId(mois_id);
    return entrees;
  },
};
