import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TaskList from '../screens/TaskList';
import ShoppingList from '../screens/ShoppingList';

enableScreens();

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="TaskList">
                    <Stack.Screen
                        name="TaskList"
                        component={TaskList}
                        options={{ title: 'Lista de Tareas' }}
                    />
                    <Stack.Screen
                        name="ShoppingList"
                        component={ShoppingList}
                        options={{ title: 'Lista de Compras' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default MainNavigator;
