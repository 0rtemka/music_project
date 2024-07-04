import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("songs").del();

    await knex("songs").insert([
        {title: "deepfake", release_date: "2021-08-23"},
        {title: "hypochondriac", release_date: "2021-08-23"},
        {title: "limbo", release_date: "2021-08-23", is_album: "true"},
        {title: "astrid", release_date: "2021-08-23"},
        {title: "lifealive", release_date: "2021-08-23"},
        {title: "432hz", release_date: "2021-08-23", is_album: "true"},
        {title: "serenite", release_date: "2021-08-23"},
        {title: "fuck this town", release_date: "2021-08-23"},
        {title: "hypochondriac", release_date: "2021-08-23",is_album: "true"},
    ]);

    await knex("artists").del();

    await knex("artists").insert([
        {name: "brakence"}, 
        {name: "glaive"}, 
        {name: "rizza"}, 
        {name: "ericdoa"}, 
        {name: "sqwore"}, 
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