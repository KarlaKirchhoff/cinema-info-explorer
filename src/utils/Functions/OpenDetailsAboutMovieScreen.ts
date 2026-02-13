import { router } from "expo-router";

export type MovieParams_OpenDetailsAboutMovieScreen = {
    id: string;
    title: string;
    poster: string;
    banner: string;
    rating: string;
    year: string;
    duration: string;
    genre: string;
    overview: string;
}

export type FunctionParams = {
    id: number;
    title: string;
    image: string;
    backdrop_path: string | null;
    vote_average: number;
    release_date: string;
    duration: number;
    genre_ids: number[];
    overview: string;
}

export default function OpenDetailsAboutMovieScreen(movie: FunctionParams) {

    const backdropUrl: string = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
        : "";
    const genre: string = movie.genre_ids[0].toString()
    const year: string = movie.release_date.split("-")[0];
    const duration: string = movie.duration.toString() ?? '--'

    router.push({
        pathname: "/(app)/detailsAboutMovie",
        params: {
            id: movie.id.toString(),
            title: movie.title,
            poster: movie.image,
            banner: backdropUrl,
            rating: movie.vote_average.toFixed(1).toString(),
            year: year,
            duration: duration,
            genre: genre.toString(),
            overview: movie.overview,
        },
    });
}

