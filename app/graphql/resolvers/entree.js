const debug = require('debug')('Resolvers:Entree');

module.exports = {
  tag: async (parent, _, { dataSources }) => {
    debug('getTagById');
    const tag = await dataSources.tag.getTagById(parent.tag_id);
    return tag;
  },
  auteur: async (parent, _, { dataSources }) => {
    debug('getAuteurById');
    const auteur = await dataSources.tag.getAuteurById(parent.auteur_id);
    return auteur;
  },
};
