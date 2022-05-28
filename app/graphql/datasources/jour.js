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

  // All jours
  async getJours() {
    debug('getJours');
    const jours = await this.knex(this.tableName).connection(this.connection).select('*').cache(TTL);
    return jours;
  }

  // One jour by id
  async getJourById(jourId) {
    debug(`getJourById jourID: ${jourId}`);
    const jourRows = await this.knex(this.tableName).connection(this.connection)
      .select('*')
      .where({ id: jourId })
      .cache(TTL);
    return jourRows[0];
  }
}

module.exports = Jour;
