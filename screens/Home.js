import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

const Home = (props) => {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breathe of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' }, 
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorepum ipsum tara rum pum pum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum color de met', key: '3' }
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => props.navigation.push('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default Home;