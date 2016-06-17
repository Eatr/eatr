module.exports = {
  test: {
    client: 'sqlite3',
    connection: {
      filename: './test-eatr.sqlite',
      database: 'eatr'
    },
    directory: '../migrations/',
    seeds: {
      directory: '../seeds/'
    },
    tableName: 'knex_migrations',
    useNullAsDefault: true,
    pool: {
      min: 1,
      max: 1
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  development: {
    client: 'sqlite3',
    connection: {
      filename: './eatr.sqlite',
      database: 'eatr'
    },
    directory: '../migrations/',
    seeds: {
      directory: '../seeds/'
    },
    tableName: 'knex_migrations',
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};