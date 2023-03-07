import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeC} from './pages/homeC'
import {Details} from './pages/details'
import {Login} from './pages/login'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNav(){
    return(
    <Drawer.Navigator 
    screenOptions={{
      headerShown: false, 
      drawerStyle: {
      backgroundColor: '#607848'
      },
      drawerActiveBackgroundColor:'rgba(120,144,72,0.8)',
      drawerActiveTintColor:'white',
      drawerInactiveTintColor:'black'
      }} >
        <Drawer.Screen name="HomeC"  component={HomeC} />
        <Drawer.Screen name="Details" component={Details} />
    </Drawer.Navigator>
)}

export function Routes(){
 return(
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Drawer" component={DrawerNav} />
        <Stack.Screen name="HomeC" component={HomeC}/>
        <Stack.Screen name="Login" component={Login} />        
      </Stack.Navigator>

)}