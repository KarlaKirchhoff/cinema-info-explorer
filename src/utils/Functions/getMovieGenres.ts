import { getGenres } from "../../api/genresAPI";
import type { MovieGenres } from "../../types/responseApi/Movie";

export async function getMovieGenres() {
    const genres = await getGenres()
    return genres.reduce<Record<number, string>>((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
    }, {});
}

/* export default function getNameMovieGenres(genres: MovieGenres[]): string[] {
    const genreMap = getMovieGenres();
    return genres.map(
        (id) => genreMap[id]
    );
} */