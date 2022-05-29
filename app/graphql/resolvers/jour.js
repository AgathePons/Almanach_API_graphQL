const debug = require('debug')('Resolvers:Jour');

module.exports = {
  entrees: async (parent, _, { dataSources }) => {
    debug('getEntreesByJourId');
    debug(`jourId: ${parent.id} : ${parent.numero}`);
    const entrees = await dataSources.entree.getEntreesByJourId(parent.id);
    return entrees;
  },
};
