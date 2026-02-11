import { useEffect, useState } from "react";
import MovieGridList from "../List/MovieGridList";
import { Movie } from "../../types/responseApi/Movie";
import { getNowPalyingMovies } from "../../api/moviesAPI";
import ActivityIndicator from "../ActivityIndicator";


export default function NowPlaying_NavMovieGridList() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMovies = async () => {
            const data = await getNowPalyingMovies();
            setMovies(data);
            setLoading(false);
        };
        loadMovies();
    }, []);

    if (loading) return <ActivityIndicator />;

    const limitedMovies = movies.slice(0, 30).map((item) => ({
        ...item,
        image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
    }));

    return (
        <MovieGridList movies={limitedMovies} />
    )
}
