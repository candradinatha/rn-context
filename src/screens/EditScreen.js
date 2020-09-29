import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import {Context} from '../context/BlogContext';

const EditScreen = ({navigation}) => {
    
    const {state} = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    const [title, setTitle] = useState(`${blogPost.title}`);
    const [content, setContent] = useState(`${blogPost.content}`);
    const {addBlogPost} = useContext(Context);

    return (
        <BlogPostForm 
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {

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