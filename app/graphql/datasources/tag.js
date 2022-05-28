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

  async getTags() {
    debug('getTags');
    const tags = await this.knex(this.tableName).connection(this.connection).select('*').cache(TTL);
    return tags;
  }
}

module.exports = Tag;
