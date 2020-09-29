import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import {Context} from '../context/BlogContext';

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const {state, updateBlogPost} = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    return (
        <BlogPostForm 
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                updateBlogPost(id, title, content, () => navigation.pop());
        }}/>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        fontSize: 16,
        padding: 4,
        marginHorizontal: 16,
        marginBottom: 8
    },

    header: {
        marginHorizontal: 16,
        marginVertical: 8
    }

});

export default EditScreen;