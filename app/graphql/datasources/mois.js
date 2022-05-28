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

  // All mois
  async getMois() {
    debug('getMois');
    const mois = await this.knex(this.tableName).connection(this.connection).select('*').cache(TTL);
    return mois;
  }

  // One mois by id
  async getMoisById(moisId) {
    debug(`getMoisById moisID: ${moisId}`);
    const moisRows = await this.knex(this.tableName).connection(this.connection)
      .select('*')
      .where({ id: moisId })
      .cache(TTL);
    return moisRows[0];
  }
}

module.exports = Mois;
