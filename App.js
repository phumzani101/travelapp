import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/home/HomeScreen';

import {createStackNavigator} from '@react-navigation/stack';
import PlaceDetailScreen from './src/screens/places/PlaceDetailScreen';
import PlaceGalleryScreen from './src/screens/places/PlaceGalleryScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetailScreen} />
        <Stack.Screen name="PlaceGallery" component={PlaceGalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
