import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import TaskModal from '../components/TaskModal';

const TaskList = ({ navigation }) => {
    const [tasks, setTasks] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const addTask = (task) => {
        setTasks([...tasks, task]);
        setModalVisible(false);
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.taskList}>
                {tasks.map((task, index) => (
                    <View style={styles.taskContainer} key={index}>
                        <Text style={styles.boldText}>Título:</Text>
                        <Text>{task.title}</Text>
                        <Text style={styles.boldText}>Descripción:</Text>
                        <Text>{task.description}</Text>
                        <Text style={styles.boldText}>Prioridad:</Text>
                        <Text>{task.priority}</Text>
                        <Button title="Eliminar" onPress={() => deleteTask(index)} />
                    </View>
                ))}
            </ScrollView>
            <Button title="Agregar Tarea" onPress={() => setModalVisible(true)} />
            <TaskModal visible={modalVisible} onClose={() => setModalVisible(false)} onAdd={addTask} />
            <Button title="Ir a Lista de Compras" onPress={() => navigation.navigate('ShoppingList')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 40,
    },
    taskContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    boldText: {
        fontWeight: 'bold',
    },
});

export default TaskList;
