import { urlBase_Apikey } from ".";
import { MovieGenres } from "../types/responseApi/Movie";


export async function getGenres(): Promise<MovieGenres[]> {
    const params = new URLSearchParams({
        api_key: urlBase_Apikey.key, // API Key no final
    });

    const url: string = `${urlBase_Apikey.url}/genre/movie/list?${params}`
    const response = await fetch(url);
    const data = await response.json();
    return data.cast
}