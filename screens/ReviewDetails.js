import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from '../shared/Card';
import { globalStyles, images } from '../styles/global';

const ReviewDetails = (props) => {

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ props.navigation.getParam('title') }</Text>
                <Text>{ props.navigation.getParam('body') }</Text>
                <View style={styles.rating}>
                     <Text>GameZone Rating : </Text>
                     <Image source={images.ratings[props.navigation.getParam('rating')]} />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});

export default ReviewDetails;