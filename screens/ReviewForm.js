import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

const ReviewForm = (props) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    props.addReview(values);
                }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput style={globalStyles.input} placeholder='Review Title ...' 
                            onChangeText={formikProps.handleChange('title')} value={formikProps.values.title} />

                        <TextInput style={globalStyles.input} placeholder='Review Comment ...' 
                            onChangeText={formikProps.handleChange('body')} value={formikProps.values.body} />

                        <TextInput style={globalStyles.input} placeholder='Rating (1-5) ...' 
                            onChangeText={formikProps.handleChange('rating')} value={formikProps.values.rating} keyboardType='numeric' />

                        <Button title='Add Review' color='maroon' onPress={formikProps.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default ReviewForm;