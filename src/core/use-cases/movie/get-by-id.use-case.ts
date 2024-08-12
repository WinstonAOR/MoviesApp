import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieIDResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entitiy";


export const getByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {

    try {
        //Fetcher
        const movie = await fetcher.get<MovieIDResponse>(`/${movieId}`);

        //Mapper
        const fullMovie = MovieMapper.fromMovieDBToEntity(movie);

        return fullMovie;

    } catch (error) {
        throw new Error(`Cannot get movie by id: ${movieId}`);
    }

}