import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        loadMovie();
    },[movieId]);

    const loadMovie = () =>{
        
    }

    return (
        <View>
            <Text>useMovie</Text>
        </View>

    )
}