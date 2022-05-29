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

  // All entrees
  async getEntrees() {
    debug('getEntrees');
    const entrees = await this.knex(this.tableName).connection(this.connection).select('*').cache(TTL);
    return entrees;
  }

  // One entree by id
  async getEntreeById(entreeId) {
    debug(`getEntreeById entreeID: ${entreeId}`);
    const entreeRows = await this.knex(this.tableName).connection(this.connection)
      .select('*')
      .where({ id: entreeId })
      .cache(TTL);
    return entreeRows[0];
  }

  // Entrees by auteur_id
  async getEntreesByAuteurId(auteurId) {
    debug(`getEntreesByAuteurId auteurID: ${auteurId}`);
    const entrees = await this.knex(this.tableName).connection(this.connection)
      .select('*')
      .where({ auteur_id: auteurId })
      .cache(TTL);
    return entrees;
  }

  // Entrees by tag_id
  async getEntreesByTagId(tagId) {
    debug(`getEntreesByTagId tagID: ${tagId}`);
    const entrees = await this.knex(this.tableName).connection(this.connection)
      .select('*')
      .where({ tag_id: tagId })
      .cache(TTL);
    return entrees;
  }

  // Entrees by jour_id
  async getEntreesByJourId(jourId) {
    debug(`getEntreesByJourId jourID: ${jourId}`);
    const entrees = await this.knex(this.tableName).connection(this.connection)
      .select('*')
      .where({ jour_id: jourId })
      .cache(TTL);
    return entrees;
  }

  // Entrees by mois_id
  async getEntreesByMoisId(moisId) {
    debug(`getEntreesByMoisId moisID: ${moisId}`);
    const entrees = await this.knex(this.tableName).connection(this.connection)
      .select('*')
      .where({ mois_id: moisId })
      .cache(TTL);
    return entrees;
  }
}

module.exports = Entree;
