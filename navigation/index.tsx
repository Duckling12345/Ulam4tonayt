
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Welcome from "../screens/WelcomeScreen";
import Home from "../screens/Homepage";
import Roulette from "../screens/Roulette";
import Adobo from "../screens/Foods/Adobo";
import Sinigang from "../screens/Foods/Sinigang";
import KareKare from "../screens/Foods/KareKare";
import Tinola from "../screens/Foods/Tinola";
import Sisig from "../screens/Foods/Sisig";
import Kaldereta from "../screens/Foods/Kaldereta";
import Bulalo from "../screens/Foods/Bulalo";
import  Pinakbet from "../screens/Foods/Pinakbet";
import { RootStackParamList } from "../types";
import BottomNavigator from "../screens/BottomNavigator";
import Profile from "../screens/Profile";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={BottomNavigator}/>
      <Stack.Screen name="Adobs" component={Adobo}/>
      <Stack.Screen name="Simigang" component={Sinigang}/>
      <Stack.Screen name="Bulalos" component={Bulalo}/>
      <Stack.Screen name="Karekares" component={KareKare}/>
      <Stack.Screen name="Sisigs" component={Sisig}/>
      <Stack.Screen name="Kalders" component={Kaldereta}/>
      <Stack.Screen name="Pinakbers" component={Pinakbet}/>
      <Stack.Screen name="Tinols" component={Tinola}/>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  );
}
