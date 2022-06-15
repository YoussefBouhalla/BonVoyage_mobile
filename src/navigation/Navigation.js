import React, {useEffect} from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import * as Screens from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';

import { getCities } from '../services/CitiesServices';
import { setCitiesAction } from '../actions/CitiesActions';


const {width, height} = Dimensions.get('window');


const Stack = createNativeStackNavigator();

export default function Navigation() {

  const dispatch = useDispatch()

  useEffect(() => {
    getCities().then(res => {
      dispatch(setCitiesAction(res.data))
    })
  }, [])
  
  return (
    <View style={styles.container}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Screens.LoginScreen} options={{headerShown: false}} /> 
                <Stack.Screen name="Signup" component={Screens.SignUpScreen} options={{headerShown: false}} />
                <Stack.Screen name="Main" component={Screens.MainScreen} options={{headerShown: false}} />
                <Stack.Screen name="Premium" component={Screens.PremiumScreen} options={{headerShown: false}} />
                <Stack.Screen name="StayDetails" component={Screens.StayDetailsScreen} options={{headerShown: false}} />
                <Stack.Screen name="Stays" component={Screens.StaysScreen} options={{headerShown: false}} />
                <Stack.Screen name="TourDetails" component={Screens.TourDetailsScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    </View> 
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    height,
    width,
    backgroundColor: '#F8F4F1'
  },
});