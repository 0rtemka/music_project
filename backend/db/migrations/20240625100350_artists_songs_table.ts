import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("artists_songs", function (table) {
    table.integer("song_id").notNullable().references("songs.id");
    table.integer("artist_id").notNullable().references("artists.id");
    table.primary(["song_id", "artist_id"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("artists_songs");
}
