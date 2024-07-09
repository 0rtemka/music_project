import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("users").del();

    await knex("users").insert([
        { login: "ortemka", password: "$2b$12$2wzGCiphWBi.yKhNl4t8eeq59PENHBw3.YbPLHF0b/cE6o3FHi0aK", registration_date: "2024-06-29" }, 
        { login: "pepussi", password: "$2b$12$o704/iZPKtkVIzCHhiq0Pe4xeTJd0AoMSS/U7mJYrnlGZ4cjZRT4a", registration_date: "2024-05-15" }, 
    ]);

    await knex("roles").del();

    await knex("roles").insert([
        { role: "USER"},
        { role: "ADMIN"},
    ]);

    await knex("users_roles").del();

    await knex("users_roles").insert([
        { user_id: 1, role_id: 2},
        { user_id: 2, role_id: 1},
    ]);

    await knex("songs_reviews").del();

    await knex("songs_reviews").insert([
        { user_id: 1, song_id: 1, title: "Крутой релиз", description: "Современное звучание, хороший текст и отличная атмосфера. Однозначно один из лучших релизов года!", issued_at: new Date(Date.now()) },
        { user_id: 1, song_id: 2, title: "Крутой релиз", description: "Современное звучание, хороший текст и отличная атмосфера. Однозначно один из лучших релизов года!", issued_at: new Date(Date.now()) },
        { user_id: 1, song_id: 3, title: "Крутой релиз", description: "Современное звучание, хороший текст и отличная атмосфера. Однозначно один из лучших релизов года!", issued_at: new Date(Date.now()) },
        { user_id: 1, song_id: 4, title: "Крутой релиз", description: "Современное звучание, хороший текст и отличная атмосфера. Однозначно один из лучших релизов года!", issued_at: new Date(Date.now()) },
        { user_id: 2, song_id: 3, title: "Крутой релиз", description: "Современное звучание, хороший текст и отличная атмосфера. Однозначно один из лучших релизов года!", issued_at: new Date(Date.now()) },
        { user_id: 2, song_id: 4, title: "Крутой релиз", description: "Современное звучание, хороший текст и отличная атмосфера. Однозначно один из лучших релизов года!", issued_at: new Date(Date.now()) },
        { user_id: 2, song_id: 5, title: "Крутой релиз", description: "Современное звучание, хороший текст и отличная атмосфера. Однозначно один из лучших релизов года!", issued_at: new Date(Date.now()) },
    ]);

    await knex("reviews_rating").del();

    await knex("reviews_rating").insert([
        { review_id: 1, rating: 100, relevance: 10, structure: 10, realization: 10, lyrics: 10, beat: 10},
        { review_id: 2, rating: 92, relevance: 9, structure: 10, realization: 9, lyrics: 10, beat: 8},
        { review_id: 3, rating: 92, relevance: 10, structure: 7, realization: 10, lyrics: 10, beat: 9},
        { review_id: 4, rating: 94, relevance: 8, structure: 9, realization: 10, lyrics: 10, beat: 10},
        { review_id: 5, rating: 94, relevance: 9, structure: 10, realization: 9, lyrics: 10, beat: 9},
        { review_id: 6, rating: 92, relevance: 10, structure: 8, realization: 10, lyrics: 10, beat: 8},
        { review_id: 7, rating: 98, relevance: 9, structure: 10, realization: 10, lyrics: 10, beat: 10},
    ]);
};