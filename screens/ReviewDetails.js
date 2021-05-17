import React from 'react';
import { View, Text } from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';

const ReviewDetails = (props) => {

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ props.navigation.getParam('title') }</Text>
                <Text>{ props.navigation.getParam('body') }</Text>
                <Text>{ props.navigation.getParam('rating') }</Text>
            </Card>
        </View>
    );
}

export default ReviewDetails;