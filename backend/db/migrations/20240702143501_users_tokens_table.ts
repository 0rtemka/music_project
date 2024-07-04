import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users_tokens", function (table) {
    table.integer("user_id").primary().references("users.id");
    table.string("token", 500).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("users_tokens");
}
