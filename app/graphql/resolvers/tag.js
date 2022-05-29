const debug = require('debug')('Resolvers:Tag');

module.exports = {
  entrees: async (parent, _, { dataSources }) => {
    debug('getEntreesByTagId');
    debug(`tagId: ${parent.id} : ${parent.tag}`);
    const entrees = await dataSources.entree.getEntreesByTagId(parent.id);
    return entrees;
  },
};
