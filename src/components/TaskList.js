import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import TaskModal from './TaskModal';

const TaskList = () => {
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
            <Text style={styles.heading}>Lista de Tareas</Text>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 16,
        paddingTop: 40,
    },
    heading: {
        fontSize: 24,
        marginBottom: 16,
    },
    taskContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    taskTitle: {
        fontSize: 16,
        marginBottom: 8,
    },
    taskDescription: {
        fontSize: 16,
        marginBottom: 8,
    },
    taskPriority: {
        fontSize: 16,
        marginBottom: 8,
    },
    boldText: {
        fontWeight: 'bold',
    },
});

export default TaskList;
