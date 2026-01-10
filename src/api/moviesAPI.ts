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
        // A API Key vai na URL
        const url = `${urlBase_Apikey.url}/discover/movie?language=pt-BR&${params}`;

        const response = await fetch(url);
        const data = await response.json();

        return data.results; // Retorna apenas os filmes
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        return [];
    }
};
