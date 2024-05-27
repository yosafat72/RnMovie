import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faHouse} from '@fortawesome/free-solid-svg-icons';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DashboardTab() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#e91e63'}}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faHouse} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Favorite',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faHeart} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardTab} />
    </Drawer.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}

export default AppNavigator;
