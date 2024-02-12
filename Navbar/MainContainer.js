import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';

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
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === BookingName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === AcoountsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (rn === ScheduleName) {
              iconName = focused ? 'settings' : 'settings-outline';

            } else if (rn === IdsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionic name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#12358F',
          inactiveTintColor: '#727272',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
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