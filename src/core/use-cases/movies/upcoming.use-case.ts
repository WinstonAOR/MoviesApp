import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieUpcomingResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entitiy";

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        const upcoming = await fetcher.get<MovieUpcomingResponse>('/upcoming');
        // console.log(upcoming);
        return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        console.log(error)
        throw new Error('Error fetcing movies - Upcoming useCase')
    }
}