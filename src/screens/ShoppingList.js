import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput } from 'react-native';

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addItemToList = () => {
        if (newItem) {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
            />
            <TextInput
                style={styles.input}
                placeholder="Agregar a la lista"
                value={newItem}
                onChangeText={(text) => setNewItem(text)}
            />
            <Button title="Agregar a la Lista" onPress={addItemToList} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    listItem: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        width: 250,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        backgroundColor: 'white',
    },
});

export default ShoppingList;
