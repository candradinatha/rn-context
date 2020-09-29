import React, { useContext } from 'react';
import { StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}) => {

    const { addBlogPost } = useContext(Context);

    return (
        <BlogPostForm 
            onSubmit={(title, content) => {
                addBlogPost(title, content, () => navigation.navigate('Index'));
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

export default CreateScreen;