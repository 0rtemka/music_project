import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("songs", function (table) {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("cover").notNullable().defaultTo("songCover.jpg");
    table.boolean("is_album").notNullable().defaultTo("false");
    table.date("release_date").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("songs");
}
