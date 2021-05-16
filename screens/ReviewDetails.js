import React from 'react';
import { Button, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

const ReviewDetails = (props) => {

    const pressHandler = () => props.navigation.goBack();

    return (
        <View style={globalStyles.container}>
            <Text>Review Details Screen</Text>
            <Button title='Back To Home Screen' onPress={pressHandler} />
        </View>
    );
}

export default ReviewDetails;