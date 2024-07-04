import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("reviews_rating", function(table) {
        table.integer("review_id").primary().references("songs_reviews.id");
        table.integer("rating").notNullable().checkBetween([0, 100]);
        table.integer("relevance").notNullable().checkBetween([0, 10]);
        table.integer("structure").notNullable().checkBetween([0, 10]);
        table.integer("realization").notNullable().checkBetween([0, 10]);
        table.integer("lyrics").notNullable().checkBetween([0, 10]);
        table.integer("beat").notNullable().checkBetween([0, 10]);
    }) 
    .then(() => 
      knex.schema.raw(`
      CREATE OR REPLACE FUNCTION update_song_rating() 
      RETURNS TRIGGER 
      AS $$
        DECLARE _song_id int;
      BEGIN
        select song_id from songs_reviews
        where id = new.review_id
        into _song_id;

        update songs_rating
        set 
     	    relevance = (relevance * reviews_count + new.relevance) / (reviews_count + 1),
     	    structure = (structure * reviews_count + new.structure) / (reviews_count + 1),
     	    realization = (realization * reviews_count + new.realization) / (reviews_count + 1),
     	    lyrics = (lyrics * reviews_count + new.lyrics) / (reviews_count + 1),
     	    beat = (beat * reviews_count + new.beat) / (reviews_count + 1),
     	    reviews_count = reviews_count + 1,
     	    rating = (((relevance * reviews_count + new.relevance) / (reviews_count + 1)) + 
                      ((structure * reviews_count + new.structure) / (reviews_count + 1)) + 
                      ((realization * reviews_count + new.realization) / (reviews_count + 1)) + 
                      ((lyrics * reviews_count + new.lyrics) / (reviews_count + 1)) + 
                      ((beat * reviews_count + new.beat) / (reviews_count + 1))) * 2
     	where song_id = _song_id;

    	return new;
      END
      $$
      language plpgsql;

      create or replace trigger insert_reviews_rating
      after INSERT on "reviews_rating"
      for each row
      execute procedure update_song_rating();  
    `)
    );
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("reviews_rating");
}

