import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("songs").del();

    await knex("songs").insert([
        {title: "deepfake", release_date: "2021-08-23", cover: "deepfake.jpg"},
        {title: "hypochondriac", release_date: "2021-08-23", cover: "hypochondriac.jpg"},
        {title: "limbo", release_date: "2021-08-23", is_album: "true", cover: "limbo.jpg"},
        {title: "astrid", release_date: "2021-08-23", cover: "astrid.jpg"},
        {title: "lifealive", release_date: "2021-08-23", cover: "lifealive.jpg"},
        {title: "432hz", release_date: "2021-08-23", is_album: "true", cover: "432hz.jpg"},
        {title: "serenite", release_date: "2021-08-23", cover: "serenite.jpg"},
        {title: "fuck this town", release_date: "2021-08-23", cover: "fuck_this_town.jpg"},
        {title: "hypochondriac", release_date: "2021-08-23",is_album: "true", cover: "hypochondriac.jpg"},
    ]);

    await knex("artists").del();

    await knex("artists").insert([
        {name: "brakence", cover: "brakence.jpg", mini_cover: 'brakenceMini.jpg'}, 
        {name: "glaive", cover: "glaive.jpg", mini_cover: 'glaiveMini.jpg'}, 
        {name: "rizza", cover: "rizza.jpg", mini_cover: 'rizzaMini.jpg'}, 
        {name: "ericdoa", cover: "ericdoa.jpg", mini_cover: 'ericdoaMini.jpg'}, 
        {name: "sqwore", cover: "sqwore.jpg", mini_cover: 'sqworeMini.jpg'}, 
    ]);

    await knex("artists_songs").del();

    await knex("artists_songs").insert([
        {artist_id: 1, song_id: 1},
        {artist_id: 1, song_id: 2},
        {artist_id: 2, song_id: 4},
        {artist_id: 2, song_id: 8},
        {artist_id: 3, song_id: 3},
        {artist_id: 3, song_id: 5},
        {artist_id: 3, song_id: 7},
        {artist_id: 4, song_id: 8},
        {artist_id: 5, song_id: 6},        
    ])
};