import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("artists", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("cover").notNullable().defaultTo("artistCover.jpg");
    table.string("mini_cover").notNullable().defaultTo("miniArtistCover.jpg");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("artists");
}
