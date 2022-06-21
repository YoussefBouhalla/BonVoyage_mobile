import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Card from './Card'

const {width, height} = Dimensions.get('window');

export default function Container() {
  return (
    <View style={{...styles.container}}>
      <Card marginTop={0}/>
      <Card marginTop={10}/>
      <Card marginTop={10} />
      <Card marginTop={10}/>
      <Card marginTop={10}/>
      <Card marginTop={10}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    
  }
})