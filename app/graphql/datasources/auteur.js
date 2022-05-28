const debug = require('debug')('DataSource:Auteur');
const { SQLDataSource } = require('datasource-sql');

// TTL: Time To Live
const TTL = 1;

class Auteur extends SQLDataSource {
  tableName = 'auteur';

  constructor(config) {
    super({ client: config.client });
    this.connection = config.connection;
  }

  async getAuteurs() {
    debug('getAuteurs');
    const allAuteurs = await this.knex(this.tableName).connection(this.connection).select('*').cache(TTL);
    return allAuteurs;
  }
}

module.exports = Auteur;
