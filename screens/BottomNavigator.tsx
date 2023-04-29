import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/Colors';
import {View} from 'react-native';
import Home from '../screens/Homepage';
import Roulette from '../screens/Roulette';
import Login from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
          
        },
        showLabel: false,
        activeTintColor: Colors.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="house-user" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Roulette"
        component={Roulette}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="compass" color={color} size={28} />
          ),
        }}
      />
 
      <Tab.Screen
        name="User"
        component={Login}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="user-circle" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
