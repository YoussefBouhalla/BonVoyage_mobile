import { StyleSheet, Text, NativeModules, View, Dimensions, Pressable, ScrollView, TextInput } from 'react-native'
import React  from 'react'

import FacebookIcon from '../assets/icons/facebookAuth.svg'
import GoogleIcon from '../assets/icons/googleAuth.svg'
import Logo from '../assets/icons/AuthLogo.svg';

import RegisterForm from '../features/UI/RegisterForm';

const {width, height} = Dimensions.get('window');

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default function SignUpScreen({ navigation }) {


  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', width, marginTop: STATUSBAR_HEIGHT +15 }}>
        <Logo />
        <Text style={{color: '#2E2E2E', fontFamily: 'Poppins-Bold', fontSize: 20 , marginTop: 14}}>Hi!</Text>
        <Text style={{color: '#2E2E2E', fontFamily: 'Poppins-Medium', fontSize: 18 }}>Join us by creating an account !</Text>
      </View>

      {/* form here */}
      <RegisterForm navigation={navigation} />
      
      <View style={{width, justifyContent: "center", marginTop: 15, display: 'flex' , flexDirection: 'row'}}>
        <Text style={{color: "#2E2E2E", fontFamily: 'Poppins-Medium', fontSize: 16}}>You already have an account ? </Text>
        <Text style={{color: "#EB5353", fontFamily: 'Poppins-Medium',textDecorationLine: 'underline', fontSize: 16}} onPress={() => navigation.goBack()} >Sign in</Text>
      </View>
 
      <View style={{width: width - 30, height: 1 , backgroundColor: "#A3A3A3" , margin:15}}>
        <Text style={{paddingHorizontal: 10,backgroundColor: "#F8F4F1",color: "#2E2E2E",position: 'absolute', transform: [{ translateY: -12 }, { translateX: (width - 50)/2}], fontFamily: 'Poppins-Medium', fontSize: 16}}>or</Text>
      </View>

      <Text style={{color: "#2E2E2E", fontFamily: 'Poppins-Medium', fontSize: 16}}>Social Media Signup</Text>

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