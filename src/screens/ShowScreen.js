import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import { EvilIcons} from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')

    const {state} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <EvilIcons 
                    style={styles.icon}
                    name="pencil"/>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    title: {
        fontSize: 16
    },
    icon:  {
        fontSize: 24,
        paddingHorizontal: 10
    }
});

export default ShowScreen;