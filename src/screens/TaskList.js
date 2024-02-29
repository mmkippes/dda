import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from '../slices/TaskSlice';
import TaskModal from '../components/TaskModal';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    const addTaskHandler = (task) => {
        dispatch(addTask(task));
        setModalVisible(false);
    };

    const deleteTaskHandler = (index) => {
        dispatch(deleteTask(index));
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
                        <Button title="Eliminar" onPress={() => deleteTaskHandler(index)} />
                    </View>
                ))}
            </ScrollView>
            <Button title="Agregar Tarea" onPress={() => setModalVisible(true)} />
            <TaskModal visible={modalVisible} onClose={() => setModalVisible(false)} onAdd={addTaskHandler} />
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
