import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Screens
import AccountScreen from './screen/AccountScreen';
import BookingScreen from './screen/BookingScreen';
import HomeScreen from './screen/HomeScreen';
import Id_cardScreen from './screen/Id_cardScreen';
import ScheduleScreen from './screen/ScheduleScreen';

//Screen names
const homeName = "Home";
const BookingName = "ระบบจองห้อง";
const AcoountsName = "ผู้ใช้งาน";
const ScheduleName = "ตารางเรียน/สอน";
const IdsName = "บัตรนักศึกษา";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let scheduleicon;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === BookingName) {
              iconName = focused ? 'today' : 'today-outline';

            } else if (rn === AcoountsName) {
              iconName = focused ? 'person' : 'person-outline';
            } else if (rn === ScheduleName) {
              iconName = focused ? 'calendar' : 'calendar-outline';

            } else if (rn === IdsName) {
              iconName = focused ? 'card' : 'card-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            
          },
        })}

        

        
        ScreenOptions={{
          tapactiveTintColor: '#12358F',
          tapinactiveTintColor: '#727272',
          taplabelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={BookingName} component={BookingScreen} />
        <Tab.Screen name={AcoountsName} component={AccountScreen} />
        <Tab.Screen name={ScheduleName} component={ScheduleScreen} />
        <Tab.Screen name={IdsName} component={Id_cardScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;