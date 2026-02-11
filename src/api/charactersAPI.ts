import { urlBase_Apikey } from "."


export const getMovieCredits = async (movie_id: number) => {
    const params = new URLSearchParams({
        api_key: urlBase_Apikey.key, // API Key no final
    });

    const url: string = `${urlBase_Apikey.url}/movie/${movie_id}/credits?${params}`
    const response = await fetch(url);
    const data = await response.json();
    return data.cast
}