const debug = require('debug')('Datasource:Entree');
const { SQLDataSource } = require('datasource-sql');

// TTL: Time To Live
const TTL = 1;

class Entree extends SQLDataSource {
  tableName = 'entree';

  constructor(config) {
    super({ client: config.client });
    this.connection = config.connection;
  }

  // All antrees
  async getEntrees() {
    debug('getEntrees');
    const entrees = await this.knex(this.tableName).connection(this.connection).select('*').cache(TTL);
    return entrees;
  }
}

module.exports = Entree;
