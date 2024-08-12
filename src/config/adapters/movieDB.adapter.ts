import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        // api_key: THE_MOVIE_DB_KEY?? 'no-key',
        api_key: '1c050ababd08296fb4e28593b5f04409',
        language: 'es'
    }
})