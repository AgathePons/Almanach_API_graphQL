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

  // All auteurs
  async getAuteurs() {
    debug('getAuteurs');
    const allAuteurs = await this.knex(this.tableName).connection(this.connection).select('*').cache(TTL);
    return allAuteurs;
  }

  // One auteur by id
  async getAuteurById(auteurId) {
    debug(`getAuteurById auteurID: ${auteurId}`);
    const auteurRows = await this.knex(this.tableName).connection(this.connection)
      .select('*')
      .where({ id: auteurId })
      .cache(TTL);
    return auteurRows[0];
  }
}

module.exports = Auteur;
