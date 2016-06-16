module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'eatr'
    },
    directory: './migrations/',
    seeds: {
      directory: './seeds/'
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