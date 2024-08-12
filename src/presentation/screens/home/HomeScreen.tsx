import { View, Text } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { isLoading, nowPlaying, popular, upconming, topRated, popularNextPage } = useMovies();

    if (isLoading) {
        return (<Text>Cargando...</Text>)
    }

    return (
        <ScrollView>
            <View style={{
                marginTop: top + 20,
                paddingBottom: 30
            }}>
                {/* Carrusel Principal */}
                <PosterCarousel movies={nowPlaying} />

                {/* Carrusel Populares */}
                <HorizontalCarousel movie={popular} title='Populares' loadNextPage={popularNextPage} />
                {/* Carrusel Top Rated */}
                <HorizontalCarousel movie={topRated} title='Mejor Calificadas' />
                {/* Carrusel Upcoming */}
                <HorizontalCarousel movie={upconming} title='Próximamente' />

            </View>
        </ScrollView>

    )
}