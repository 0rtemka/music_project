import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("songs_rating", function (table) {
      table.increments("id").primary();
      table.integer("song_id").references("songs.id");
      table.integer("reviews_count").notNullable().defaultTo(0);
      table.float("rating", 4, 1).notNullable().checkBetween([0, 100]);
      table.float("relevance", 3, 1).notNullable().checkBetween([0, 10]);
      table.float("structure", 3, 1).notNullable().checkBetween([0, 10]);
      table.float("realization", 3, 1).notNullable().checkBetween([0, 10]);
      table.float("lyrics", 3, 1).notNullable().checkBetween([0, 10]);
      table.float("beat", 3, 1).notNullable().checkBetween([0, 10]);
    })
    .then(() => 
      knex.schema.raw(`
      CREATE OR REPLACE FUNCTION create_rating_for_song() 
      RETURNS TRIGGER 
      AS $$
      BEGIN
      insert into songs_rating(song_id, rating, reviews_count, relevance, structure, realization, lyrics, beat)
      values (new."id", 0, 0, 0, 0 ,0 ,0 ,0);
      return new;
      END
      $$
      language plpgsql;

      create or replace trigger insert_song
      after INSERT on "songs"
      for each row
      execute procedure create_rating_for_song();  
    `)
    );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("songs_rating");
}
