import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MoviePopularResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entitiy";

interface Options{
    page?: number;
    limit?: number;
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?:Options): Promise<Movie[]> => {

    try {
        const popular = await fetcher.get<MoviePopularResponse>('/popular',{
            params:{
                page: options?.page??1
            }
        });
        // console.log(popular);
        return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        console.log(error)
        throw new Error('Error fetcing movies - PopularUseCase')
    }
}