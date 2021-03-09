import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import ShopPage from './pages/shopPage';
import Fitted from './pages/fitted'
const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Fitted" component={Fitted}/>
        <AppStack.Screen name="ShopPage" component={ShopPage} />
        
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
