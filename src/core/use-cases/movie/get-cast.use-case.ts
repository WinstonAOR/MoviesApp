import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieCastResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { CastMapper } from "../../../infraestructure/mappers/cast.mapper";
import { Cast } from "../../entities/cast.entity";

export const getCastUseCase = async (fetcher: HttpAdapter, movieId: number):Promise<Cast[]> =>{

    try {
        const {cast} = await fetcher.get<MovieCastResponse>(`/${movieId}/credits`);
        const actors = cast.map(CastMapper.fromMovieCastToEntity);
        return actors;
    } catch (error) {
        throw new Error(`Cannot get movie cast ${movieId}`);
    }
}