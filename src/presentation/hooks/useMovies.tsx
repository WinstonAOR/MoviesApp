import { useEffect, useState } from 'react'
import { Movie } from '../../core/entities/movie.entitiy'
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [upconming, setUpcoming] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);


    useEffect(() => {
        initialLoad();

    }, [])

    const initialLoad = async () => {
        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
        const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);
        const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);

        const [
            nowPlaying,
            popular,
            topRated,
            upconming
        ] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            upcomingPromise,
            topRatedPromise
        ]);

        setNowPlaying(nowPlaying);
        setPopular(popular);
        setUpcoming(upconming);
        setTopRated(topRated);

        setIsLoading(false);
    }
    return {
        isLoading,
        nowPlaying,
        popular,
        upconming,
        topRated
    }
}