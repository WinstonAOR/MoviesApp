import { View, Image, Pressable } from 'react-native'
import { Movie } from '../../../core/entities/movie.entitiy'
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/Navigation';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 270, width = 180 }: Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <Pressable
            onPress={() => navigation.navigate('Details', { movieId: movie.id })}
            style={({ pressed }) => ({
                width,
                height,
                marginHorizontal: 0,
                paddingBottom: 20,
                paddingHorizontal: 5,
                opacity: pressed ? 0.8 : 1
            })}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: movie.poster }}
                />
            </View>
        </Pressable>
    )
}

export const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18
    },
    imageContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9
    }
})