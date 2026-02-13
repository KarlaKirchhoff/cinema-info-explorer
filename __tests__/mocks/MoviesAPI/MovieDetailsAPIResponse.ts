import { MovieDetais } from "../../../src/types/responseApi/Movie";

export const MovieDetailsAPIMock: MovieDetais = {
    adult: false,
    backdrop_path: "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
    belongs_to_collection: {
        id: 10,
        name: "Star Wars Collection",
        poster_path: "/pJ7bQh0rZg5wYF9z6Jp5QbZQ6sL.jpg",
        backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg",
    },
    budget: 11000000,
    genres: [
        { id: 878, name: "Ficção científica" },
        { id: 12, name: "Aventura" },
    ],
    original_language: "en",
    original_title: "Star Wars",
    overview:
        "Luke Skywalker se junta a um grupo de rebeldes para destruir a Estrela da Morte.",
    popularity: 85.6,
    poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    production_companies: [
        {
            id: 1,
            name: "Lucasfilm Ltd.",
            logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
            origin_country: "US",
        },
    ],
    production_countries: [
        { iso_3166_1: "US", name: "United States of America" },
    ],
    release_date: "1977-05-25",
    revenue: 775398007,
    runtime: 121,
    spoken_languages: [
        {
            english_name: "English",
            iso_639_1: "en",
            name: "English",
        },
    ],
    status: "Released",
    tagline: "A long time ago in a galaxy far, far away...",
    title: "Star Wars",
    video: false,
    vote_average: 8.2,
    vote_count: 19500,
};
