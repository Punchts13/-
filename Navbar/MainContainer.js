import * as React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
      
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5
  }

});


function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}

        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle:{
            position: 'absolute',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            backgroundColor: '#ffffff' ,
            height: 90,
            elevation: 0,
          },
        
        })}

        ScreenOptions={{
          tapactiveTintColor: '#12358F',
          tapinactiveTintColor: '#727272',
          taplabelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center',justifyContent: 'center'}}>
              <Ionicons
                 name={focused? 'home' : 'home-outline'}
                size={28} 
                color={focused? '#12358F' : '#727272'} 
              >
              </Ionicons>
              <Text style={{color:focused? '#12358F' : '#727272', fontSize:12 }}>Home</Text>
            </View>
          )
        }}></Tab.Screen>

        <Tab.Screen name={BookingName} component={BookingScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center',justifyContent: 'center'}}>
              <Ionicons
                 name={focused? 'today' : 'today-outline'}
                size={28} 
                color={focused? '#12358F' : '#727272'} 
              >
              </Ionicons>
              <Text style={{color:focused? '#12358F' : '#727272', fontSize:12 }}>ระบบจองห้อง</Text>
            </View>
          )
        }}></Tab.Screen>

        <Tab.Screen name={AcoountsName} component={AccountScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center',
            justifyContent: 'center', 
            width: 55 ,
            height: 55 , 
            backgroundColor: focused? '#12358F' : '#727272' , 
            borderRadius: 30, 
            top: -10,
            ...styles.shadow

            }}>
             
            </View>
          )
        }}></Tab.Screen>

        <Tab.Screen name={ScheduleName} component={ScheduleScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center',justifyContent: 'center'}}>
              <Ionicons
                name={focused? 'calendar' : 'calendar-outline'}
                size={28} 
                color={focused? '#12358F' : '#727272'} 
              >
              </Ionicons>
              <Text style={{color:focused? '#12358F' : '#727272', fontSize:10 }}>ตารางเรียน/สอบ</Text>
            </View>
          )
        }}></Tab.Screen>

        <Tab.Screen name={IdsName} component={Id_cardScreen} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center',justifyContent: 'center' }}>
              <Ionicons
                 name={focused? 'card' : 'card-outline'}
                size={28} 
                color={focused? '#12358F' : '#727272'} 
              >
              </Ionicons>
              <Text style={{color:focused? '#12358F' : '#727272', fontSize:12 }}>บัตรนักศึกษา</Text>
            </View>
          )
        }}></Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>

    
  );
}


export default MainContainer;