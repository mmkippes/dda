import React, { useState } from 'react';
import { View, Text, TextInput, Modal, Button, StyleSheet } from 'react-native';

const TaskModal = ({ visible, onClose, onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');

    const handleAdd = () => {
        const newTask = {
            title,
            description,
            priority,
        };

        onAdd(newTask);
        setTitle('');
        setDescription('');
        setPriority('');
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalHeading}>Agregar Tarea</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Título"
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Descripción"
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Prioridad"
                    value={priority}
                    onChangeText={(text) => setPriority(text)}
                />
                <Button title="Cancelar" onPress={onClose} />
                <Button title="Agregar" onPress={handleAdd} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalHeading: {
        fontSize: 20,
        marginBottom: 16,
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

export default TaskModal;
