import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {SearchContextProvider} from './src/Context/SearchContext';

const App = () => {
  return (
    <SearchContextProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SearchContextProvider>
  );
};

export default App;
