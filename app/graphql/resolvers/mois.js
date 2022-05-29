const debug = require('debug')('Resolvers:Mois');

module.exports = {
  entrees: async (parent, _, { dataSources }) => {
    debug('getEntreesByMoisId');
    debug(`moisId: ${parent.id} : ${parent.label}`);
    const entrees = await dataSources.entree.getEntreesByMoisId(parent.id);
    return entrees;
  },
};
