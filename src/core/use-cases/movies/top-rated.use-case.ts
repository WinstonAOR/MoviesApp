import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieTopRatedResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entitiy";

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        const topRated = await fetcher.get<MovieTopRatedResponse>('/top_rated');
        // console.log(topRated);
        return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        console.log(error)
        throw new Error('Error fetcing movies - topRated useCase')
    }
}