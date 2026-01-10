import { TMDB_API_TOKEN, TMDB_API_KEY, TMDB_BASE_URL } from '@env';

interface UrlBase_Apikey {
  url: string,
  key: string
}

export function DefaultApiOptionRequest(method: string = 'GET') {
  const opt_method = method.toUpperCase()
  if (opt_method !== 'GET') {
    throw new Error('Método Inválido.\n Opções Válidas: GET')
  }

  return {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_TOKEN}`,
    },
  };
}

export const urlBase_Apikey: UrlBase_Apikey = {
  url: TMDB_BASE_URL,
  key: TMDB_API_KEY
}