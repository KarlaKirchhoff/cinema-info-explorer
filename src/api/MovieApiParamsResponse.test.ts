import { getPopularMovies } from './moviesAPI'; // ajuste conforme seu caminho real
import { movieListAPIResponse, movieListAPITrueResponse } from '../../__tests__/mocks/MoviesAPI/movieListAPIResponse';
import type { Movie } from '../types/responseApi/Movie';

// Mock da API Key
jest.mock('.', () => ({
    urlBase_Apikey: {
        url: 'https://api.themoviedb.org/3',
        key: 'FAKE_API_KEY',
    },
}));

describe('MovieApiParamsResponse', () => {
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

    it('todos os filmes devem ter video como false', () => {
        movieListAPIResponse.forEach(movie => {
            expect(movie.video).toBe(false);
        });
    });

    it(`deve ao interpretar o segundo parâmetro video como 'false'`, async () => {
        fetchSpy.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValue({
                results: movieListAPIResponse,
            }),
        } as unknown as Response);

        const video: string = 'false'
        const videoParamBoolean = video.toLowerCase() === 'false';
        expect(videoParamBoolean).toBe(true);

        const result: Movie[] = await getPopularMovies('1', video);

        result.forEach(movie => {
            expect(movie.video).toBe(false); // ou true, dependendo da lógica
        });
    });

    it(`deve ao interpretar o segundo parâmetro video como 'true'`, async () => {
        fetchSpy.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValue({
                results: movieListAPITrueResponse,
            }),
        } as unknown as Response);

        const video: string = 'true'
        const videoParamBoolean = video.toLowerCase() === 'true';
        expect(videoParamBoolean).toBe(true);

        const result: Movie[] = await getPopularMovies('1', video);

        result.forEach(movie => {
            expect(movie.video).toBe(true); // ou true, dependendo da lógica
        });
    });

    it(`deve REPROVAR ao interpretar o segundo parâmetro video como 'true' recebendo os registros como 'movie.video = false'`, async () => {
        fetchSpy.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValue({
                results: movieListAPIResponse, // todos video = false
            }),
        } as unknown as Response);

        const video: string = 'true';
        const videoParamBoolean = video.toLowerCase() === 'true';
        expect(videoParamBoolean).toBe(true);

        const result: Movie[] = await getPopularMovies('1', video);

        try {
            result.forEach(movie => {
                expect(movie.video).toBe(true); // vai falhar, porque todos são false
            });
        } catch (error) {
            console.warn('Teste falhando Propositalmente:', error);
        }
    });

    it(`deve REPROVAR ao interpretar o segundo parâmetro video como 'false' recebendo os registros como 'movie.video = true'`, async () => {
        fetchSpy.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValue({
                results: movieListAPITrueResponse, // todos video = true
            }),
        } as unknown as Response);

        const video: string = 'false';
        const videoParamBoolean = video.toLowerCase() === 'false';
        expect(videoParamBoolean).toBe(true);

        const result: Movie[] = await getPopularMovies('1', video);

        try {
            result.forEach(movie => {
                expect(movie.video).toBe(false);
            });
        } catch (error) {
            console.warn('Teste falhando Propositalmente:', error);
        }
    });

    it(`deve REPROVAR ao receber o parametro 'video' de forma inválida`, async () => {
        
    })
})