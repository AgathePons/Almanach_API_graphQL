const debug = require('debug')('DataSource:Jour');
const { SQLDataSource } = require('datasource-sql');

// TTL: Time To Live
const TTL = 1;

class Jour extends SQLDataSource {
  tableName = 'jour';

  constructor(config) {
    super({ client: config.client });
    this.connection = config.connection;
  }

  async getJours() {
    debug('getJours');
    const jours = await this.knex(this.tableName).connection(this.connection).select('*').cache(TTL);
    return jours;
  }
}

module.exports = Jour;
