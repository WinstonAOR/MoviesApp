import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entitiy";

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
        // console.log(nowPlaying);
        return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        console.log(error)
        throw new Error('Error fetcing movies - NowPlaying useCase')
    }
}