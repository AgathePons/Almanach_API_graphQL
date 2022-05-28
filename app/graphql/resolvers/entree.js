const debug = require('debug')('Resolvers:Entree');

module.exports = {
  tag: async (parent, _, { dataSources }) => {
    debug('getTagById');
    const tag = await dataSources.tag.getTagById(parent.tag_id);
    return tag;
  },
  auteur: async (parent, _, { dataSources }) => {
    debug('getAuteurById');
    const auteur = await dataSources.auteur.getAuteurById(parent.auteur_id);
    return auteur;
  },
  jour: async (parent, _, { dataSources }) => {
    debug('getJourById');
    const jour = await dataSources.jour.getJourById(parent.jour_id);
    return jour;
  },
  mois: async (parent, _, { dataSources }) => {
    debug('getMoisById');
    const mois = await dataSources.mois.getMoisById(parent.mois_id);
    return mois;
  },
};
