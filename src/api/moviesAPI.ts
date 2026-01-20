import { urlBase_Apikey } from ".";

export const fetchPopularMovies = async (pageNumber: string = '1', video: string = 'false') => {
    try {
        const params = new URLSearchParams({
            include_adult: 'false',
            include_video: video,
            page: pageNumber,
            sort_by: 'popularity.desc',
            api_key: urlBase_Apikey.key, // API Key no final
        });

        const url = `${urlBase_Apikey.url}/discover/movie?language=pt-BR&${params}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
        const data = await response.json();
        return data.results; // Retorna apenas os filmes
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        return [];
    }
};

export const getMovieDetails = async (movie_id: number) => {
    try {
        const params = new URLSearchParams({
            api_key: urlBase_Apikey.key,
            language: 'pt-BR',
        });

        const url = `${urlBase_Apikey.url}/movie/${movie_id}?${params}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
        return null;
    }
};


export const searchMovie = async (movie: string, pageNumber: string = '1', video: string = 'false') => {
    try {
        const params = new URLSearchParams({
            include_adult: 'false',
            include_video: video,
            page: pageNumber,
            query: encodeURIComponent(movie),
            api_key: urlBase_Apikey.key, // API Key no final
        });

        const url = `${urlBase_Apikey.url}/search/movie?language=pt-BR&${params}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        return [];
    }
}

export const getMovieReview = async (movie_id: number, pageNumber: string = '1') => {

    const params = new URLSearchParams({
        page: pageNumber,
        api_key: urlBase_Apikey.key, // API Key no final
    });
    const url: string = `${urlBase_Apikey.url}/movie/${movie_id}/reviews?${params}`
    const response = await fetch(url);
    const data = await response.json();
    return data.results
}