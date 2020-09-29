import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {

    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
        <View
            style={{flex:1}}>
            <FlatList
                style={{flex:1}}
                data={state}
                keyExtractor={(blogPost) => `${blogPost.id}` }
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text
                                    style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather
                                        style={styles.icon}
                                        name="trash"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}/>
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate('Create')}>
                <Feather 
                    style={styles.icon}
                    name="plus"/>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderColor: 'gray',
        paddingHorizontal: 16,
        borderBottomWidth: 1
    },
    blogList: {
        flex: 1
    },
    title: {
        fontSize: 16
    },
    icon:  {
        fontSize: 24,
        paddingHorizontal: 10
    }
})

export default IndexScreen;