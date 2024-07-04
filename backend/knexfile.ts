import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.PG_DATABASE,
      port: parseInt(process.env.PG_PORT || '5432'),
      host: process.env.PG_HOST || 'localhost',
      user: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "db/migrations"
    },
    seeds: {
      directory: "db/seeds"
    }
  },
};

module.exports = config;