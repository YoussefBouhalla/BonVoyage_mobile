import { StyleSheet, Text, NativeModules, View, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

import FacebookIcon from '../assets/icons/facebookAuth.svg'
import GoogleIcon from '../assets/icons/googleAuth.svg'
import Logo from '../assets/icons/AuthLogo.svg';

import LoginForm from '../features/UI/LoginForm';

const {width, height} = Dimensions.get('window');

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default function LoginScreen({navigation}) {

  // loading Poppins fonts
  const [loaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!loaded) {
      return null;
  }

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', width, marginTop: STATUSBAR_HEIGHT +15 }}>
        <Logo />
        <Text style={{color: '#2E2E2E', fontFamily: 'Poppins-Bold', fontSize: 20 , marginTop: 14}}>Welcome back!</Text>
        <Text style={{color: '#2E2E2E', fontFamily: 'Poppins-Medium', fontSize: 18 }}>We are happy to have you back !</Text>
      </View>

      <LoginForm navigation={navigation} />
      
      <View style={{width, justifyContent: "center", marginTop: 15, display: 'flex' , flexDirection: 'row'}}>
        <Text style={{color: "#2E2E2E", fontFamily: 'Poppins-Medium', fontSize: 16}}>You don't have an account ? </Text>
        <Text style={{color: "#EB5353", fontFamily: 'Poppins-Medium',textDecorationLine: 'underline', fontSize: 16}} onPress={() => navigation.navigate('Signup')}>Sign up</Text>
      </View>
 
      <View style={{width: width - 30, height: 1 , backgroundColor: "#A3A3A3" , margin:15}}>
        <Text style={{paddingHorizontal: 10,backgroundColor: "#F8F4F1",color: "#2E2E2E",position: 'absolute', transform: [{ translateY: -12 }, { translateX: (width - 50)/2}], fontFamily: 'Poppins-Medium', fontSize: 16}}>or</Text>
      </View>

      <Text style={{color: "#2E2E2E", fontFamily: 'Poppins-Medium', fontSize: 16}}>Social Media Login</Text>

      <View style={{width, justifyContent: "center", marginTop: 15, display: 'flex' , flexDirection: 'row'}}>
        <Pressable style={{padding: 22, backgroundColor: "#3B5998", borderRadius: 999}}>
          <FacebookIcon />
        </Pressable>
        <Pressable style={{padding: 22,marginLeft: 15, backgroundColor: "#EA4335", borderRadius: 999}}>
          <GoogleIcon />
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F4F1',
  }
})