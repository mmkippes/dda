// App.js
import React, { useState } from 'react';
import { View } from 'react-native';
import TaskList from './src/components/TaskList';
import ShoppingList from './src/components/ShoppingList';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('TaskList');

  const switchScreen = (screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'TaskList':
        return <TaskList switchScreen={switchScreen} />;
      case 'ShoppingList':
        return <ShoppingList switchScreen={switchScreen} />;
      default:
        return null;
    }
  };

  return <View style={{ flex: 1 }}>{renderScreen()}</View>;
};

export default App;
