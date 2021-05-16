import React from 'react';
import { Button, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

const Home = (props) => {

    const pressHandler = () => props.navigation.push('ReviewDetails');

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='Go To Review Details' onPress={pressHandler} />
        </View>
    );
}

export default Home;