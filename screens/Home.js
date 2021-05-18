import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal, StyleSheet } from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

const Home = (props) => {

    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breathe of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' }, 
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorepum ipsum tara rum pum pum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum color de met', key: '3' }
    ]);

    const addReview = review => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons name='close' size={25} style={{ ...styles.modalToggle, ...styles.modalClose}} onPress={() => setModalOpen(false)} />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            
            <MaterialIcons name='add' size={25} style={styles.modalToggle} onPress={() => setModalOpen(true)} />

            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => props.navigation.push('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1
    }
});

export default Home;