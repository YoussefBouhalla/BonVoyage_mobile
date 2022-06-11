import {StyleSheet, View, Dimensions, TextInput, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const {width, height} = Dimensions.get('window');


export default function AuthInput({ marginTop, Icon, placeholder, error, errorType }) {

  // loading Poppins fonts
  const [loaded] = useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!loaded) {
      return null;
  }

  return (
    <>
      <View style={{...styles.input_holder , marginTop}}>
        <View style={{padding: 5, backgroundColor: '#a9a9a95e' , borderRadius: 999}}>
            <Icon />
        </View>
        <TextInput
            style={styles.input}
            // onChangeText={}
            placeholder={placeholder}
        />
      </View>
      <Text style={{...styles.error_text, display: error[errorType] ? 'flex' : 'none'}}>{error[errorType]}</Text> 
    </>
  
  )
}

const styles = StyleSheet.create({
  shadow : {
    shadowColor: "#a1a0a0",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 2.54,
    elevation: 3
  },
  input_holder: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
    borderStyle: "solid",
    borderColor: "#a9a9a95e",
    borderWidth: 0.5,
    borderRadius: 8,
    height: 60,
    padding: 10,
    alignItems: 'center',
    shadowColor: "#a1a0a0",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 2.54,
    elevation: 3,
    marginHorizontal: 15
  },
  input: {
    height: '100%',
    width: '100%',
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    marginLeft: 10
  },
  error_text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    paddingTop: 5,
    color: '#bd1a1a',
    marginHorizontal: 15
}
})