import { View, Text } from 'react-native'
import { Movie } from '../../../core/entities/movie.entitiy'
import { ScrollView } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    height?: number;
}

export const PosterCarousel = ({ height = 260, movies }: Props) => {
    return (
        <View style={{ height }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    movies.map(movie =>
                        <MoviePoster
                            key={movie.id}
                            movie={movie}
                        />
                    )
                }
            </ScrollView>
        </View>

    )
}