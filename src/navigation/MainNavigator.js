import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TaskList from '../screens/TaskList';
import ShoppingList from '../screens/ShoppingList';
import CameraScreen from '../components/Camera';

enableScreens();

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen
                        name="TaskList"
                        component={TaskList}
                        options={{ title: 'Lista de Tareas' }}
                    />
                    <Tab.Screen
                        name="ShoppingList"
                        component={ShoppingList}
                        options={{ title: 'Lista de Compras' }}
                    />
                    <Tab.Screen
                        name="Camera"
                        component={CameraScreen}
                        options={{ title: 'Cámara' }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default MainNavigator;
