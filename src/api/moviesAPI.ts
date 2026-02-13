import { urlBase_Apikey } from ".";
import { parseQueryParams_StrBoolean, parseQueryParams_StrNumber } from "../utils/Functions/ApiParams";

export const getPopularMovies = async (pageNumber: string = '1', video: string = 'false') => {
    try {

        if(!parseQueryParams_StrNumber(pageNumber)){
            throw new Error('Parametro PageNumber incorreto')
        }

        if(!parseQueryParams_StrBoolean(video)){
            throw new Error('Parametro video incorreto')
        }

        const params = new URLSearchParams({
            include_adult: 'false',
            include_video: video,
            page: pageNumber,
            sort_by: 'popularity.desc',
            language: 'pt-BR',
            api_key: urlBase_Apikey.key, // API Key no final
        });

        const url = `${urlBase_Apikey.url}/discover/movie?${params}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
        const data = await response.json();
        return data.results; // Retorna apenas os filmes
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        return [];
    }
};

export const getNowPalyingMovies = async (ano: string = '2024', inicio?: string, fim?: string, pageNumber: string = '1') => {
    try {
        const params = new URLSearchParams({
            include_adult: 'false',
            page: pageNumber,
            sort_by: 'popularity.desc',
            language: 'pt-BR',
            api_key: urlBase_Apikey.key, // API Key no final
        });

        let url: string = ''

        if (inicio && fim) {
            url = `${urlBase_Apikey.url}/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fim}&${params}`;
        } else {
            url = `${urlBase_Apikey.url}/discover/movie?primary_release_year=${ano}&${params}`
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
        const data = await response.json();
        return data.results; // Retorna apenas os filmes
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        return [];
    }
};

export const getTopRatedMovies = async (pageNumber: string = '1', video: string = 'false') => {
    try {
        const params = new URLSearchParams({
            include_adult: 'false',
            include_video: video,
            page: pageNumber,
            sort_by: 'vote_count.desc',
            language: 'pt-BR',
            api_key: urlBase_Apikey.key, // API Key no final
        });

        const url = `${urlBase_Apikey.url}/discover/movie?${params}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
        const data = await response.json();
        return data.results; // Retorna apenas os filmes
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        return [];
    }
};

export const getUpComingMovies = async (pageNumber: string = '1', video: string = 'false') => {
    try {
        const params = new URLSearchParams({
            include_adult: 'false',
            include_video: video,
            page: pageNumber,
            sort_by: 'primary_release_date.desc',
            language: 'pt-BR',
            api_key: urlBase_Apikey.key, // API Key no final
        });

        const url = `${urlBase_Apikey.url}/discover/movie?${params}`;
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