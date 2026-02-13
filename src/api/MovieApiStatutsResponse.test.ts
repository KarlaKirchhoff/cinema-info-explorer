// src/api/getPopularMovies.test.ts
import { getPopularMovies } from './moviesAPI'; // ajuste conforme seu caminho real
import { movieListAPIResponse } from '../../__tests__/mocks/MoviesAPI/movieListAPIResponse';

// Mock da API Key
jest.mock('.', () => ({
    urlBase_Apikey: {
        url: 'https://api.themoviedb.org/3',
        key: 'FAKE_API_KEY',
    },
}));

describe('MovieApiStatutsResponse', () => {
    let fetchSpy: jest.SpyInstance;
    let consoleErrorSpy: jest.SpyInstance;

    beforeEach(() => {
        // Mock global.fetch
        fetchSpy = jest.spyOn(global, 'fetch');

        // Mock console.error para não poluir logs
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
    });

    afterEach(() => {
        fetchSpy.mockRestore();
        consoleErrorSpy.mockRestore();
    });

    it('retorna lista de filmes quando a requisição for bem-sucedida', async () => {
        fetchSpy.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValue({
                results: movieListAPIResponse,
            }),
        } as unknown as Response);

        const result = await getPopularMovies('1', 'false');

        expect(fetchSpy).toHaveBeenCalledTimes(1);
        expect(fetchSpy).toHaveBeenCalledWith(
            expect.stringContaining('/discover/movie')
        );

        expect(result).toEqual(movieListAPIResponse);
        expect(result.length).toBe(5);
    });

    it('retorna array vazio quando resposta não é ok', async () => {
        fetchSpy.mockResolvedValueOnce({
            ok: false,
            status: 500,
            json: jest.fn(),
        } as unknown as Response);

        const result = await getPopularMovies();

        expect(fetchSpy).toHaveBeenCalled();
        expect(result).toEqual([]);
    });

    it('retorna array vazio quando ocorre erro no fetch', async () => {
        fetchSpy.mockRejectedValueOnce(new Error('Network error'));

        const result = await getPopularMovies();

        expect(fetchSpy).toHaveBeenCalled();
        expect(result).toEqual([]);
    });
});
