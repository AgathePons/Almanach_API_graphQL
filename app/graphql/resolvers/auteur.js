const debug = require('debug')('Resolvers:Auteur');

module.exports = {
  entrees: async (parent, _, { dataSources }) => {
    debug('getEntreesByAuteurId');
    debug(`auteurId: ${parent.id} : ${parent.pseudo}`);
    const entrees = await dataSources.entree.getEntreesByAuteurId(parent.id);
    return entrees;
  },
};
