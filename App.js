import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import RecipeDetailScreen from './Screens/RecipeDetailScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName = 'Welcome' screenOptions={{headerShown: false}}>
          <Stack.Screen name = 'Home' component={HomeScreen} />
          <Stack.Screen name = 'Welcome' component={WelcomeScreen} />
          <Stack.Screen name = 'RecipeDetailScreen' component={RecipeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;