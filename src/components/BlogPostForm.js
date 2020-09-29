import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text
                style={styles.header}>Enter Title</Text>
            <TextInput
                style={styles.input}
                value={title} 
                onChangeText={text => setTitle(text)}/>
            <Text
                style={styles.header}>Enter Content</Text>
            <TextInput
                style={styles.input}
                value={content} 
                onChangeText={text => setContent(text)}/>

            <Button 
                title="Save Blog Post"
                onPress={() => onSubmit(title, content)}/>
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: "",
        content: ""
    }
};

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

export default BlogPostForm;