import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

export default function Item({setCurrentIndex, currentIndex, index, title }) {


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