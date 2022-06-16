import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';


export default function Item({setCurrentIndex, currentIndex, index, title }) {

  // loading Poppins fonts
  const [loaded] = useFonts({
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Pressable onPress={() => setCurrentIndex(index)} style={{...styles.content ,flex: 1,borderColor: "#EB5353", borderBottomWidth: currentIndex === index ? 4 : 0 , backgroundColor: currentIndex === index ? '#a9a9a911' : 'transparent'}}>
      <Text style={{fontFamily: 'Poppins-SemiBold', color: "#000", fontSize: 12, marginLeft: 5}}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  content : {
    display: 'flex' , 
    justifyContent: 'center',
    alignItems: 'center'
  }
})