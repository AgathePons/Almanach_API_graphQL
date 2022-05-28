const debug = require('debug')('DataSource:Mois');
const { SQLDataSource } = require('datasource-sql');

// TTL: Time To Live
const TTL = 1;

class Mois extends SQLDataSource {
  tableName = 'mois';

  constructor(config) {
    super({ client: config.client });
    this.connection = config.connection;
  }

  async getMois() {
    debug('getMois');
    const mois = await this.knex(this.tableName).connection(this.connection).select('*').cache(TTL);
    return mois;
  }
}

module.exports = Mois;
