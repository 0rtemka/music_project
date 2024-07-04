import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("login").notNullable().unique();
    table.string("password").notNullable();
    table.date("registration_date").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("users");
}
