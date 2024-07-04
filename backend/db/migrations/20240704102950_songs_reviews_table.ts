import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("songs_reviews", function (table) {
    table.increments("id").primary();
    table.integer("user_id").references("users.id");
    table.integer("song_id").references("songs.id");
    table.string("title").notNullable();
    table.string("description", 1000).notNullable();
    table.timestamp("issued_at").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("songs_reviews");
}
