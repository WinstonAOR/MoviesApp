import { View, Text, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { Movie } from '../../../core/entities/movie.entitiy';
import { FlatList } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';
import { useEffect, useRef } from 'react';

interface Props {
    movie: Movie[];
    title?: string;
    loadNextPage?: () => void;
}

export const HorizontalCarousel = ({ movie, title, loadNextPage }: Props) => {

    const isLoading = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200)
    }, [movie])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

        if (!isEndReached) return;
        isLoading.current = true;

        //Cargar el resto de peliculas
        loadNextPage && loadNextPage();
    }
    return (
        <View
            style={{ height: title ? 260 : 220 }}
        >
            {
                title && (
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: '300',
                            marginLeft: 10,
                            marginBottom: 10
                        }}
                    >
                        {title}
                    </Text>
                )
            }
            <FlatList
                data={movie}
                renderItem={({ item }) => (
                    <MoviePoster movie={item} width={120} height={170} />
                )}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => onScroll(event)}
            />
        </View>

    )
}