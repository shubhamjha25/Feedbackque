import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a no. between 1-5', (val) => {
            return (parseInt(val) < 6 && parseInt(val) > 0);
        })
})

const ReviewForm = (props) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
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