import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entitiy';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<Cast[]>();

    useEffect(() => {
        loadMovie();
    }, [movieId]);

    const loadMovie = async () => {
        setIsLoading(true);
        const fullMoviePromise =  UseCases.getByIdUseCase(movieDBFetcher, movieId);
        const castPromise = UseCases.getCastUseCase(movieDBFetcher,movieId);
        const [fullMovie, cast] = await Promise.all([fullMoviePromise,castPromise]);
        setMovie(fullMovie);
        setCast(cast);
        setIsLoading(false);
    }

    return {
        isLoading,
        movie,
        cast
    }

}