const debug = require('debug')('Datasource:Tag');
const { SQLDataSource } = require('datasource-sql');

// TTL: Time To Live
const TTL = 1;

class Tag extends SQLDataSource {
  tableName = 'tag';

  constructor(config) {
    super({ client: config.client });
    this.connection = config.connection;
  }

  // All tags
  async getTags() {
    debug('getTags');
    const tags = await this.knex(this.tableName).connection(this.connection).select('*').cache(TTL);
    return tags;
  }

  // On tag by id
  async getTagById(id) {
    debug(`getTagById tagID: ${id}`);
    const tagRows = await this.knex(this.tableName).connection(this.connection)
      .select('*')
      .where({ id })
      .cache(TTL);
    return tagRows[0];
  }
}

module.exports = Tag;
